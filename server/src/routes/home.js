const router = require('koa-router')();
const HomeController = require('../controllers/home_controller');
router.get('/', HomeController.getSession);
module.exports = router;