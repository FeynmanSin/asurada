const redis = require('../db/connections/redis_connect');

function redisSet(key, value, timeout = 60 * 60) {
  if (typeof (value) === 'object') {//如果value为对象将其转化为JSON字符串
    value = JSON.stringify(value);
  }
  redis.set(key, value);// 保存数据到redis
  redis.expire(key, timeout);// 设置过期时间
}

function redisGet(key) {
  return new Promise((resolve, reject) => {
    redis.get(key).then(res => {
      if (res === null) {
        return null;
      }
      /* 
      如果是JSON字符串则解析为对象,如果不是则报错代表数据并不是JSON字符串
      通过catch直接返回数据
      */
      try {
        resolve(JSON.parse(res));
      } catch (error) {
        resolve(res);
      }
    }, err => {
      reject(err);
    })
  })
}

module.exports = { redisSet, redisGet };
