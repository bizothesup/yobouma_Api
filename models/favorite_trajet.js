module.exports = (sequelize, DataTypes) => {
    const FavoriteTrajet = sequelize.define('favorite_trajet', {
        latitude_depart: {
            type: DataTypes.STRING
        },
        longitude_depart: {
            type: DataTypes.STRING
        },
        latitude_arrivee: {
            type: DataTypes.STRING
        },
        longitude_arrivee: {
            type: DataTypes.STRING
        },
        depart_name: {
            type: DataTypes.STRING
        },
        destination_name: {
            type: DataTypes.STRING
        },
        distance: {
            type: DataTypes.INTEGER
        },
        statut: {
            type: DataTypes.STRING
        },
    });

    return FavoriteTrajet;
}