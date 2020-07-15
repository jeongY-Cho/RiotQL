import axios from 'axios'
import testAdapter from './tests/test_adapter'

// set adapter to testAdapter
// test adapter redirects all calls to a mock api with the same openapi schema as riot api
beforeAll(async () => {
  axios.defaults.adapter = await testAdapter()
})

test('trial', async () => {
  console.log(axios.defaults.adapter)
  let res = await axios.get(
    '/lol/champion-mastery/v4/champion-masteries/by-summoner/asasdfasdf',
  )
  console.log(res)
  expect(3).toBe(3)
})
