const crypto = require('crypto');
const { cryptoSecret } = require('../config/config');

function makeCrypto(str) {
  const _md5 = crypto.createHash('md5');
  const content = `str=${str}&secret${cryptoSecret}`;
  return _md5.update(content).digest('hex');//字符串加密为MD5并且改为16进制
}
module.exports = { makeCrypto };