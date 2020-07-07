# Riotql

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

- RIOT_KEY
  - riot api key
  - get a developer key from: https://developer.riotgames.com/
- PORT
  - default: 4000
  - port to run server

#### 3. Start server:

```
  npm start
```

## Todo

- [ ] Rate limiting / request counting / how many requests left / 'retry-after' on error
- [ ] Query resolvers for:
- - [ ] match
- - [ ] rankedList
- - [ ] rankedLeague
- - [ ] tournament
- - [ ] clash
- [ ] Mutation resolvers for:
- - [ ] tournament
- [ ] Subscription resolvers for:
- - [ ] featured games
- [ ] documentation: endpoint mapping from Riot API to Riotql
- [ ] riot api updates for tft, lor, valorant
