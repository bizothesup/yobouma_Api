module.exports = (sequelize, DataTypes) => {

    const VehiculeRental = sequelize.define('vehicule_rental', {
        nombre: {
            type: DataTypes.STRING
        },
        statut: {
            type: DataTypes.STRING
        },
        prix: {
            type: DataTypes.INTEGER
        },
        nb_place: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.TEXT
        },
    });

    return VehiculeRental;
}