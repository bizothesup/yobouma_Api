module.exports = (sequelize, DataTypes) => {
    const TypeVehicule = sequelize.define('type_vehicule', {
        libelle: {
            type: DataTypes.STRING
        },
        prix: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.TEXT
        },
    });

    return TypeVehicule;
}