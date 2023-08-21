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
  REDIS_CONFIG: [6379, '127.0.0.1']
};