module.exports = (sequelize, DataTypes) => {
    const TypeVehiculeRental = sequelize.define('type_vehicule_rental', {
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

    return TypeVehiculeRental;
}