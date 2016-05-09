var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
app.get('/mobile', function (req, res) {
	console.log("yay");
	res.sendFile(path.join(__dirname, 'public', 'mobile.html'))
});
app.get('/photography', function (req, res) {
	console.log("yay");
	res.sendFile(path.join(__dirname, 'public', 'photography.html'))
});
app.get('/photography/:project', function (req, res) {
	console.log(req.params.project);
	res.sendFile(path.join(__dirname, 'public', req.params.project+'.html'))
});
app.get('/mobile', function (req, res) {
	console.log("yay");
	res.sendFile(path.join(__dirname, 'public', 'mobile.html'))
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});