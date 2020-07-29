module.exports = function(sequelize, DataType){
    var Food= sequelize.define('Food',{
      // Trying to use my carbs variable to populate in value below;
          meal:DataType.STRING,
          carbs:DataType.INTEGER, 
          fiber:DataType.INTEGER,
          netCarbs:DataType.INTEGER
    });
   

Food.associate = function(models) {
    Food.belongsTo(models.Restaurant, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Food;

};



