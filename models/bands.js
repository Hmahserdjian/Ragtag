// this is for our bands page.
module.exports = function(sequelize, DataTypes) {
    // var Bands = sequelize.define("Bands", {
    //     name: DataTypes.STRING,
    //     genre: DataTypes.STRING,
    //    descriptions: DataTypes.STRING,
    //    image: DataTypes.STRING
         var Bands = sequelize.define("Bands",{
                artistName: DataTypes.STRING,
                artistDescription:DataTypes.STRING,
                smLinks:DataTypes.STRING,
                artistPicture: DataTypes.STRING,
                artistSong:DataTypes.STRING
         });
    
          return Bands;
        };
