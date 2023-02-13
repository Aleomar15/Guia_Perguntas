const  Sequelize  = require("sequelize");
const connection = new Sequelize('guiaperguntas','root','',{
    host: 'localhost',
    dialect:'mysql'
});
module.exports = connection;
