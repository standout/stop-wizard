// server.js
// where your node app starts

// init project
let express = require('express')
let app = express()

let port = process.env.PORT || 3000

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname))

// listen for requests :)
let listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
