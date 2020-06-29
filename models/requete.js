module.exports = (sequelize, DataTypes) => {

    const Requete = sequelize.define('requete', {
        depart_name: {
            type: DataTypes.STRING
        },
        destination_name: {
            type: DataTypes.STRING
        },
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
        place: {
            type: DataTypes.TEXT
        },
        number_poeple: {
            type: DataTypes.INTEGER
        },
        distance: {
            type: DataTypes.INTEGER
        },
        duree: {
            type: DataTypes.STRING
        },
        motant: {
            type: DataTypes.INTEGER
        },
        trajet: {
            type: DataTypes.TEXT
        },
        statut: {
            type: DataTypes.STRING
        },
        heure_retour: {
            type: DataTypes.TIME
        },
        statut_round: {
            type: DataTypes.STRING
        },
        date_retour: {
            type: DataTypes.DATE
        },
        statut_paiement: {
            type: DataTypes.STRING
        }
    });

    return Requete;
}