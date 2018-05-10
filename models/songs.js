//  this is for the songs table.
module.exports = function(sequelize, DataTypes) {
    var Songs = sequelize.define("Songs", {
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
        duration: DataTypes.TIME
    });


        Songs.associate = function(models) {
            // We're saying that a Post should belong to an Author
            // A Post can't be created without an Author due to the foreign key constraint
            Songs.belongsTo(models.Bands, {
              foreignKey: {
                allowNull: false
              }
            });
          };
        
          return Songs;
        };
        