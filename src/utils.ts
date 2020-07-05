import * as log from "loglevel";

export function asyncWait(secs: number) {
  log.info(`Waiting ${secs}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, secs * 1000);
  });
}

export function fetchWrapper<A, B, R>(
  fn: (region: A, args: B) => Promise<R>,
  max_attempts = 3
) {
  return async function (region: A, options: B): Promise<R> {
    try {
      log.debug(`${fn.name} called`);
      log.trace(`${fn.name} called with ${JSON.stringify(options)}`);
      let res = await fn(region, options);
      // @ts-ignore
      log.debug(
        `${fn.name} returned from call with: ${JSON.stringify(options)}`
      );
      // @ts-ignore
      if (res.headers) {
        // @ts-ignore
        log.debug(`Rate limit count: ${res.headers["x-app-rate-limit-count"]}`);
      }
      return res;
    } catch (err) {
      switch (err.response?.status) {
        // switch cases for response codes from RIOT
        case 429:
          // Rate limit Reached
          log.info("[429] Rate Limit Reached");
          await asyncWait(parseInt(err.response.headers["retry-after"]) + 1);
          break;
        case 400:
          // Bad Request
          log.warn(
            `[400] Bad Request; on ${fn.name} and ${JSON.stringify(options)}`
          );
          break;
        case 403:
          // Forbidden
          log.warn(
            `[403] Forbidden; on ${fn.name} and ${JSON.stringify(options)}`
          );
          throw err;
        case 404:
          // Data not found
          log.debug(
            `[404] Data not found; on ${fn.name} and ${JSON.stringify(options)}`
          );
          throw err;
        case 405:
          // Method not allowed
          log.warn(
            `[405] Method not allowed; on ${fn.name} and ${JSON.stringify(
              options
            )}`
          );
          throw err;
        case 415:
          // Unsupported Media Type
          log.warn(
            `[415] Unsupported Media Type; on ${fn.name} and ${JSON.stringify(
              options
            )}`
          );
          throw err;
        case 401:
          // Unauthorized
          log.error(
            `[405] Unauthorized; on ${fn.name} and ${JSON.stringify(options)}`
          );
          throw err;
        case 500:
          // Internal Server Error
          log.warn(
            `[500] Internal Server Error; on ${fn.name} and ${JSON.stringify(
              options
            )}`
          );
          break;
        case 502:
          // Bad Gateway
          log.warn(
            `[502] Bad Gateway; on ${fn.name} and ${JSON.stringify(options)}`
          );
          break;
        case 504:
          // Service Unavailable
          log.warn(
            `[504] Service Unavailable; on ${fn.name} and ${JSON.stringify(
              options
            )}`
          );
          break;
        case 503:
          // Gateway Timeout
          log.warn(
            `[503] Gateway Timeout; on ${fn.name} and ${JSON.stringify(
              options
            )}`
          );
          break;
        default:
          switch (err.code) {
            // switch cases for axios err
            case "ECONNREFUSED":
              log.error(
                `ECONNREFUSED; on ${fn.name} and ${JSON.stringify(options)}`
              );
              log.trace();
              break;
            case "ETIMEDOUT":
              log.error(
                `ETIMEDOUT; on ${fn.name} and ${JSON.stringify(options)}`
              );
              log.trace();
              break;
            default:
              throw err;
          }
      }

      if (max_attempts - 1) {
        log.debug(
          `Retrying on ${fn.name} and ${JSON.stringify(
            options
          )}; attempts left: `,
          max_attempts - 1
        );
        return fetchWrapper(fn, max_attempts - 1)(region, options);
      } else {
        log.error(`Max Attempts on ${fn.name} and ${JSON.stringify(options)}`);
        throw err;
      }
    }
  };
}
