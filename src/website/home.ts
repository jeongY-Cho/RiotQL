import { server } from 'nexus'

const express = server.express

express.get('/test', (req, res) => {
  res.send('success')
})
