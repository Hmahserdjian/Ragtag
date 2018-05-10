// this is for our bands page.
module.exports = function(sequelize, DataTypes) {
    var Bands = sequelize.define("Bands", {
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
       descriptions: DataTypes.STRING,
       image: DataTypes.STRING
         

    });
          Bands.associate = function(models) {
            // Associating bands with songs
            // When an bands is deleted, also delete any associated songs
            Bands.hasMany(models.Songs, {
              onDelete: "cascade"
            });
          };
        
          return Bands;
        };
