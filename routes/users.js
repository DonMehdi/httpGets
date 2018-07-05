var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("dffff");
  req.on('data',function(data){
    console.log(data);
  })
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  console.log("this is post");
  console.log(req.body);
  
  res.send('respond with a resource');
});
module.exports = router;
