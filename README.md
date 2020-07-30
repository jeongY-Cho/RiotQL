# RiotQL

### A graphql wrapper for Riot API

## Usage

#### 1. Installation:

- clone repo to wherever you want.

```bash
git clone https://github.com/jeongY-Cho/riotql.git
```

- install dependencies

```
npm install
```

- build package

```
npm run build
```

#### 2. Declare .env vars:

- RIOT_API_DEVELOPMENT_KEY
- RIOT_API_LEAGUE_KEY
- RIOT_API_TFT_KEY
- RIOT_API_VAL_KEY
- RIOT_API_LOR_KEY
- RIOT_API_TOURNAMENT_KEY
  - riot api keys
  - get a key (developer or otherwise) from: https://developer.riotgames.com/
  - the server will use the proper key for the proper endpoint
  - **except** or will fallback to the development key if provided.
  - **note:** tournament related calls will not fallback to the development key.
  - **note 2:** server won't start if at least development key isn't declared
- PORT
  - default: 4000
  - port to run server

### Note: Tournament related calls can only be done if you use a tournament api key.

#### 3. Start server:

```
  npm start
```

## Todo

- [x] Query resolvers for:
- - [x] match
- - [x] rankedList
- - [x] rankedLeague
- - [x] tournament / tournament stub (remove?)
- - [x] clash
- - [x] featured games
- - [x] free champion rotation
- [x] Mutation resolvers for:
- - [x] tournament
- [ ] Subscription resolvers for:
- - [ ] featured games
- - [ ] free champion rotation
- [ ] documentation: endpoint mapping from Riot API to RiotQL
- [ ] riot api updates for tft, lor, valorant

## Note About tests:

This app is built from ground up with type safety. Assuming that the tools used to generate types aren't broken themselves, everything should work as advertized. So there aren't tests.

## Known Issues:

- graphql schema names don't completely follow PascalCase/camelCase conventions because of name sanitizer of the graphql schema codegen breaks some names.
  - I could find the name sanitizer in the openapi-to-graphql dependency and enforce naming conventions but I can't be bothered to atm.
- tournament implementation cannot be tested since I'm not a tournament provider
