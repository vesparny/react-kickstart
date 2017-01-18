var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname, '/dist')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(3000, function (err) {
  if (err) {
    console.log(err)
  }
  console.info('==> 🌎 Listening on port %s.', 3000)
})
