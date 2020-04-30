const express = require('express')
const configureMiddleware = require('./configurationMiddleware.js')
// restrictedAuth

// routers

const server = express()
configureMiddleware(server)


// route handlers 



server.get('/', (req,res) => {
     res.send('Hello, you are at the root of the server')
})

//* export global middlewares, routers, server setup
module.exports = server;

