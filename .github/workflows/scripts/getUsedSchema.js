let latestRecord = require('../../../SchemaRecord.json')[0]

let recordJson = require('../../../' + latestRecord)
console.log(JSON.stringify(recordJson, undefined, 2))
