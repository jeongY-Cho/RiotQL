"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_1 = require("nexus");
// @ts-ignore
const express = nexus_1.server.express;
express.set('views', process.cwd() + '/views');
express.set('view engine', 'jsx');
express.engine('jsx', require('express-react-views').createEngine());
express.get('/', (req, res, next) => {
    // for when/if this method becomes a SPA
    // if (req.url === '/playground' || req.url === '/graphql') return next()
    res.render('index');
});
