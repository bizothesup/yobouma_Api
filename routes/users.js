var express = require('express');
var router = express.Router();
const user = require('../bin/database')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource:'+user.Country.findAll().then(user=>{
    console.log(user)
  }).catch(err=>console.log(err)));
});

module.exports = router;
