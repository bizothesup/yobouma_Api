
module.exports = (sequelize, DataTypes) => {
    const CategorieUser =sequelize.define('categorie_user',{
        libelle:{
            type:DataTypes.STRING
        }
    });
    return CategorieUser;
}

