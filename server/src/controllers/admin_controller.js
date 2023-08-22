const { addAdmin } = require('../services/admin_service');
const { makeCrypto } = require('../utils/utils');
class Admin {
  async createAdmin(ctx, next) {

    const res = await addAdmin({
      username: '555',
      password: makeCrypto('111111')
    })
    console.log(">>>>>res", res)
    ctx.body = res;
  }
  async getAdmin(ctx, next) {

  }
}
module.exports = new Admin();