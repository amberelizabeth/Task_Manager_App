const Sequelize = require('sequelize');
const config = new Sequelize('task_manager', 'robo', '9|S~}a*bZ^XCT#b_', {
    dialect: 'mysql'
});

module.exports = config;