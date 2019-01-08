var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.use(function(req, res, next) {
console.log("req", req);
console.log("res", res);
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get('/', (req, res, next) => {
    console.log('HIT!');
    res.json({msg: 'This is CORS-enabled for all origins!'})
  });
   
var server = app.listen(3000, () => {
    console.log('CORS-enabled web server listening on port 80')
  });