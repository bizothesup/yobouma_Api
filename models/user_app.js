module.exports = (sequelize, DataTypes) => {

    const UserApp = sequelize.define('user_app', {
        nom: {
            type: DataTypes.STRING
        },
        prenom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        login_type: {
            type: DataTypes.STRING
        },
        photo_path: {
            type: DataTypes.STRING
        },
        statut: {
            type: DataTypes.STRING
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


    return UserApp;
}