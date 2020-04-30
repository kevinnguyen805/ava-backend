require('dotenv').config()

const server = require('./api/server.js')

let port = process.env.PORT || 4000


//* set up server to listen to port 
server.listen(port, () => {
     console.log(`Hello, you are listening to ${port}`)
})

