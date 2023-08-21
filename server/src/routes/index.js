const router = require('koa-router')();
const indexController = require('../controllers/Index.js');
router.get('/', indexController.index);

module.exports = router;