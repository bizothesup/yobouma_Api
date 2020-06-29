module.exports = (sequelize, DataTypes) => {

    const PayementMethod = sequelize.define('payement_method', {
        libelle: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.STRING
        },
    });

    return PayementMethod;
}