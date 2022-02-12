const Sequelize = require('sequelize');
const User = require('./user');
const Notice = require('./notice');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.name,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = User;
db.Notice = Notice;

User.init(sequelize);
Notice.init(sequelize);

User.associate(db);
Notice.associate(db);

module.exports = db;