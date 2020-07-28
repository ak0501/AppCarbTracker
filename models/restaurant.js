
module.exports = function(sequelize, DataTypes){
var Restaurant = sequelize.define("Restaurant",{   
    name:{
        type:DataTypes.STRING,
        allowNull:false}
});

Restaurant.associate =function(models){
    Restaurant.hasMany(models.Food,{
        onDelete:"cascade"
    });    
};
return Restaurant;
};