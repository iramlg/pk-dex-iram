const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 5000;
const indexPath = path.join(__dirname, 'dist/index.html')

app.use(express.static(__dirname + '/dist'));
app.get('/', function (_, res) { res.sendFile(indexPath) })

app.listen(port)
