const cloudbase = require('@cloudbase/node-sdk');
const { CLOUDBASE_CONFIG } = require('../../config/db_config');
const tcb = cloudbase.init({
  env: CLOUDBASE_CONFIG.env,
  secretId: CLOUDBASE_CONFIG.secretId,
  secretKey: CLOUDBASE_CONFIG.secretKey,
  region: CLOUDBASE_CONFIG.region
});
const db = tcb.database()
module.exports = db;