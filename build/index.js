var express = require("express");
var app = express();

app.use(require("morgan")("dev"));
app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.status(200).render('index.html');
});

console.log("Listening on http://localhost:8080");
app.listen(8080, '0.0.0.0');