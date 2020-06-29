module.exports = (sequelize, DataTypes) => {
    const Conducteur = sequelize.define('conducteur', {
        nom: {
            type: DataTypes.STRING
        },
        prenom: {
            type: DataTypes.STRING
        },
        cnib: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        mdp: {
            type: DataTypes.STRING
        },
        longitute: {
            type: DataTypes.STRING
        },
        latitude: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        statut: {
            type: DataTypes.STRING
        }, statut_licence: {
            type: DataTypes.STRING
        },
        statut_nic: {
            type: DataTypes.STRING
        },
        statut_vehicule: {
            type: DataTypes.STRING
        },
        online: {
            type: DataTypes.STRING
        },
        login_type: {
            type: DataTypes.STRING
        },
        photo: {
            type: DataTypes.TEXT
        },
        photo_path: {
            type: DataTypes.TEXT
        },
        photo_licence: {
            type: DataTypes.TEXT
        },
        photo_licence_path: {
            type: DataTypes.TEXT
        },
        photo_nic: {
            type: DataTypes.TEXT
        },
        photo_nic_path: {
            type: DataTypes.TEXT
        },
        tonotify: {
            type: DataTypes.STRING
        },
        device_id: {
            type: DataTypes.STRING
        },
        fcm_id: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.INTEGER
        },
    });

    return Conducteur;
}