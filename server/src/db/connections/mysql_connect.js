const Sequelize = require('sequelize');
const { MYSQL_CONFIG } = require('../../config/db_config');
const seq = new Sequelize(...MYSQL_CONFIG.config, MYSQL_CONFIG.base);
module.exports = seq;