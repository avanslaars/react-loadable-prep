const path = require('path')
const express = require('express')

const app = express()

app.use(express.static('build'))

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname + 'build/index.html'))
})

app.listen(3030, () => {
  console.log('Server listening at http://localhost:3030')
})
