import axios from 'axios'
import { createTestContext } from './tests/__helpers'

const ctx = createTestContext()

test('test info', async () => {
  const res = await ctx.client.send(`
    {
      info {
        description
      }
    }
  `)
  expect(res).toMatchInlineSnapshot(`
    Object {
      "info": Object {
        "description": "This is a graphql wrapper of RIOT API",
      },
    }
  `)
})

test('custom adapter', async () => {
  const res = await ctx.client.send(`
    {
      summoner(region: na1, summonerName: "abc") {
        accountId
        id
        region
      }
    }
  `)
  expect(res).toMatchObject({
    summoner: {
      accountId: expect.any(String),
      id: expect.any(String),
      region: expect.any(String),
    },
  })
})
