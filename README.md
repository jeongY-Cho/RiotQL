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

#### or import into your project:

```typescript
import RiotQL from "./build/index.js";
```

## Todo

- [x] ~~Caching for requests that go multiple times~~ exposed axios options to export so can use any adapter for caching
- [ ] Rate limiting / request counting / how many requests left / 'retry-after' on error
- [ ] Query resolvers for:
- - [x] match
- - [ ] rankedList
- - [ ] rankedLeague
- - [x] tournament / tournament stub
- - [ ] clash
- - [x] featured games
- - [x] free champion rotation
- [ ] Mutation resolvers for:
- - [ ] tournament
- [ ] Subscription resolvers for:
- - [ ] featured games
- - [ ] free champion rotation
- [ ] documentation: endpoint mapping from Riot API to RiotQL
- [ ] testing!
- [ ] riot api updates for tft, lor, valorant

## Known Issues:

- graphql schema names don't completely follow PascalCase/camelCase conventions because of name sanitizer of the graphql schema codegen breaks some names.
  - I could find the name sanitizer in the openapi-to-graphql depenency and enforce naming conventions but I can't be bothered to atm.
- tournament implementation cannot be tested since I'm not a tournament provider
