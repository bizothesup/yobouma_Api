
module.exports = (sequelize, DataTypes) => {
    const Commision = sequelize.define('commision', {
        libelle: {
            type: DataTypes.STRING
        },
        value: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        }

    });
    return Commision;
}
