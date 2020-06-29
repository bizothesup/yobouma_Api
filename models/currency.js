module.exports = (sequelize, DataTypes) => {
    const Currency = sequelize.define('currency', {
        libelle: {
            type: DataTypes.STRING
        },
        symbole: {
            type:DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
    });
    return Currency;
}