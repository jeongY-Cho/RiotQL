import { schema } from 'nexus'
import { AxiosResponse } from 'axios'
import { APIKeyType } from '../../app'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('summoner', {
      args: {
        region: schema.arg({ type: 'RegionInput', required: true }),
        encryptedAccountId: schema.stringArg(),
        summonerName: schema.stringArg(),
        encryptedPUUID: schema.stringArg(),
        encryptedSummonerId: schema.stringArg(),
      },
      type: 'Summonerv4Summoner',
      async resolve(
        root,
        {
          region,
          encryptedAccountId,
          encryptedPUUID,
          encryptedSummonerId,
          summonerName,
        },
        context,
      ) {
        // counts number fo ids given. throws error if too many
        const count = [
          encryptedAccountId,
          encryptedPUUID,
          encryptedSummonerId,
          summonerName,
        ].filter(Boolean).length
        if (count > 1) {
          throw new Error(
            `only one id type should be supplied got ${count} instead `,
          )
        }

        let res: AxiosResponse | null
        if (encryptedAccountId) {
          res = await context.api(
            APIKeyType.League,
            region,
            'summoner-v4.getByAccountId',
            {
              encryptedAccountId,
            },
          )
        } else if (encryptedPUUID) {
          res = await context.api(
            APIKeyType.League,
            region,
            'summoner-v4.getByPUUID',
            {
              encryptedPUUID,
            },
          )
        } else if (encryptedSummonerId) {
          res = await context.api(
            APIKeyType.League,
            region,
            'summoner-v4.getBySummonerId',
            {
              encryptedSummonerId,
            },
          )
        } else if (summonerName) {
          res = await context.api(
            APIKeyType.League,
            region,
            'summoner-v4.getBySummonerName',
            {
              summonerName,
            },
          )
        } else {
          throw new Error('no id of any kind given')
        }
        return res ? { ...res.data, region } : null
      },
    })
  },
})
