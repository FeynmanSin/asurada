const tcb = require('../db/connections/cloudbase_connect');

class AdminService {
  async addAdmin(adminInfo) {
    const { username, password } = adminInfo;
    const adminCloudBase = tcb.collection('Admins')
    const { data } = await adminCloudBase.where({ username }).get();
    if (data.length < 1) {
      return await adminCloudBase.add({
        username,
        password
      })
    }
  }
}
module.exports = new AdminService();