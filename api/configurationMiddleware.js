const express = require('expresss')
const helment = require('helmet')
const cors = require('cors')

module.exports = server => {
     server.use(express.json());
     server.use(helmet());
     server.use(cors());
}