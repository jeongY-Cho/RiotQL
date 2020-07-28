const React = require('react')

const colors = {
  1: '#B5B4B9',
  2: '#CBC9CF',
  3: '#EEE3DD',
  4: '#F4CAB0',
  5: '#D8B8AB',
}

const colorsMap = {
  primary1: colors[4],
  primary2: colors[5],
  secondary1: colors[2],
  secondary2: colors[1],
  tertiary: colors[3],
}

module.exports = (props) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      ></link>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        console.log("test")
      `,
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html {
          margin: 0;
          border: 0;
        }
        body {
          margin: 0;
        }
        a:visited {
          color: #000;
        }
      `,
        }}
      />
      <nav
        style={{
          height: '3em',
          backgroundColor: colorsMap.primary1,
          display: 'flex',
        }}
      >
        <span style={{ margin: 'auto 10px', flexGrow: 1, color: '#000' }}>
          RiotQL
        </span>
        <span style={{ margin: 'auto 10px', color: '#000' }}>
          <a href="./playground">Playground</a>
        </span>

        <span style={{ margin: 'auto 10px' }}>
          <a href="https://github.com/jeongY-Cho/RiotQL">
            <img
              style={
                {
                  // WebkitFilter: 'invert(1)',
                  // filter: 'invert(1)',
                }
              }
              src="https://img.icons8.com/material-sharp/32/000000/github.png"
              alt="github"
            />
          </a>
        </span>
      </nav>
      <div style={{ margin: '0 5%' }}>
        <div
          style={{
            height: '60vh',
            paddingTop: '10vh',
          }}
        >
          <h1 style={{ textAlign: 'center', fontSize: '8em' }}>RiotQL</h1>
          <h3 style={{ textAlign: 'center' }}>
            A GraphQL imagination of Riot API
          </h3>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '10px 20px',
            backgroundColor: colorsMap.secondary1,
            height: '45vh',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ minWidth: 200, padding: 70 }}>
            <h3 style={{ fontSize: '1.5em' }}>
              Call Riot API endpoints with GraphQL queries.
            </h3>
          </div>
          <div>some example</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'row',
            padding: '10px 20px',
            backgroundColor: colorsMap.secondary2,
            height: '45vh',
          }}
        >
          <div>some example</div>
          <div style={{ flexGrow: 1, padding: 70 }}>
            <h3 style={{ fontSize: '1.5em', textAlign: 'end' }}>
              Make one nested call instead of 10 different calls
            </h3>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            padding: '10px 20px',
            backgroundColor: colorsMap.tertiary,
            height: '45vh',
          }}
        >
          <div style={{ flexGrow: 1, padding: 70, minWidth: 400 }}>
            <h3 style={{ fontSize: '1.5em' }}>
              Tournament endpoints supported as mutations.
            </h3>
          </div>
          <div style={{ flexGrow: 2 }}>some example</div>
        </div>

        <div
          style={{
            margin: '0 auto',
            display: 'flex',

            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            backgroundColor: colorsMap.primary2,
            padding: 40,
            height: '20vh',
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Try it out in the playground:</h2>
          <div
            style={{
              alignContent: 'center',
            }}
          >
            <a href="./playground">
              <button className="btn btn-primary">Playground</button>
            </a>
          </div>
        </div>
        <div style={{ height: 100 }}>
          RiotQL isn't endorsed by Riot Games and doesn't reflect the views or
          opinions of Riot Games or anyone officially involved in producing or
          managing Riot Games properties. Riot Games, and all associated
          properties are trademarks or registered trademarks of Riot Games, Inc.
        </div>
      </div>
    </div>
  )
}
