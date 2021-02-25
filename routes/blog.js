const Router = require('koa-router');
const router = new Router({prefix: '/blog'});
const blogController = require('../controllers/blog');

//密码登陆
router.post('/create', blogController.create)

router.post('/findAll', blogController.findAll)

router.post('/update', blogController.update)

router.post('/del', blogController.del)

module.exports = router