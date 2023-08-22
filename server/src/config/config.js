const { REDIS_CONFIG } = require('./db_config');
module.exports = {
  sessionInfo: {
    keys: ['a1!s2@d3#f4%_+g5%h6^'],//用于加密cookie
    name: 'asurada.sid',//cookie name
    prefix: 'asurada.sess',//redis存储前缀
  },
  cookieInfo: {
    path: '/',//作用在全局根目录
    httpOnly: true,//不允许修改
    maxAge: 24 * 60 * 60 * 1000,//设置过期时间
  },
  redisInfo: {
    all: `${REDIS_CONFIG[1]}:${REDIS_CONFIG[0]}`,// redis 地址
  },
  cryptoSecret: 'Sin@@&&(%^*323$&^$123&*)1&23',//md5加密密钥
}