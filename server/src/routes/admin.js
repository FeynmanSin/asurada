const router = require('koa-router')();
const AdminController = require('../controllers/admin_controller.js');
router.prefix('/admin');
router.get('/create_admin', AdminController.createAdmin);
module.exports = router;