import { server } from 'nexus'
// @ts-ignore

const express = server.express

express.set('views', process.cwd() + '/views')
express.set('view engine', 'jsx')
express.engine('jsx', require('express-react-views').createEngine())

express.get('/', (req, res, next) => {
  console.log('thing')

  // for when/if this method becomes a SPA
  // if (req.url === '/playground' || req.url === '/graphql') return next()
  res.render('index')
})
