
var Sequelize = require('sequelize');
const dotenv = require("dotenv");

var sequelize =new Sequelize (
    'trackFood',
    'root',
    'password',{
        dialect:'mysql',
        host:'localhost',
        port:3306,
        pool:{
            max:5,
            min:0,
            idle:10000
        }
    });

    module.exports=sequelize;