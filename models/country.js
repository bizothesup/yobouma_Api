
module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('country', {
        libelle: {
            type: DataTypes.STRING
        },
        code: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
    });
    return Country;
}