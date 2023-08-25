const { createClient } = require('redis');
const { REDIS_CONFIG } = require('../../config/db_config');
const client = createClient(REDIS_CONFIG); // 创建客户端

// 连接并监听错误
client.connect().catch((reason) => console.log('redis client error: ', reason));
module.exports = client;
