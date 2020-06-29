module.exports = (sequelize, DataTypes) => {

    const Recu = sequelize.define('recu', {
        image: {
            type: DataTypes.TEXT
        },
        image_name: {
            type: DataTypes.TEXT
        },
        montant: {
            type: DataTypes.INTEGER
        },
        duree: {
            type: DataTypes.STRING
        },
        distanc: {
            type: DataTypes.INTEGER
        }
    });


    return Recu;
}