var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

// static folder serve karega
app.use(express.static(__dirname + '/public'))

// optional health check (pro touch)
app.get('/health', function(req, res) {
  res.send('OK')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
