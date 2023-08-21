const redis = require('redis');
const { REDIS_CONFIG } = require('../../config/db_config');
const redisClient = redis.createClient(); // 创建客户端

// 监听错误信息
redisClient.on('err', err => {
  console.log('redis client error: ', err);
});

// 连接
redisClient.connect(...REDIS_CONFIG);
module.exports = redisClient;
