
module.exports = (sequelize, DataTypes) => {
    const LocationVehicule = sequelize.define('location_vehicule', {
        nb_jour: {
            type: DataTypes.INTEGER
        },
        date_debut: {
            type: DataTypes.DATE
        },
        date_fin: {
            type: DataTypes.DATE
        },
        contact: {
            type: DataTypes.STRING
        },
        statut: {
            type: DataTypes.STRING
        },
    });

    return LocationVehicule;
}