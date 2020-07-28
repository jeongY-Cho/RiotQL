import { schema } from 'nexus'

schema.objectType({
  name: 'Info',
  definition(t) {
    t.string('description')
    t.string('version', { nullable: true })
    t.string('constants', { nullable: true })
    t.string('repo', { nullable: true })
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('info', {
      type: 'Info',
      resolve(root, args, ctx) {
        return {
          description: 'This is a graphql wrapper of RIOT API',
          version: process.env.npm_package_version,
          constants:
            'https://developer.riotgames.com/docs/lol#general_game-constants',
          repo: 'https://github.com/jeongY-Cho/riotql',
          notice:
            'This demo only has currently only been approved to serve league of legends endpoints. Calls to non-league related endpoints will throw an error. If you want to try it out yourself, clone the repo and run "npm i && npm run build && npm start" with your own key',
        }
      },
    })
  },
})
