const ENV = require('./env_config');

module.exports = {
  MYSQL_CONFIG: {
    base: {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    },
    conf: ['txclass', 'root', ENV.isPrd ? 'xx' : '12345678']
  },
  REDIS_CONFIG: {
    url: 'redis://redis:6379',
  },
  CLOUDBASE_CONFIG: {
    env: 'sin-8ggq50jzd79a5e10',
    secretId: 'AKIDCKFzWu51kFWcVBHDwRitwmPoIbidMtAn',
    secretKey: 'UlqhLrBH9oHXbVHtIVafOzNcjhYDtRwI',
    region: 'ap-guangzhou'
  }
};