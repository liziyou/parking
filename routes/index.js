var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hahahahhaha' });
});

router.post('/testLogin',function(req,res){
  console.log('前端请求过来了');
  var userName = req.body.userName;
  var pwd = req.body.pwd;
  console.log('前端传过来的数据');
  res.json({flag:1,msg:'请求过来了'});

});
module.exports = router;
