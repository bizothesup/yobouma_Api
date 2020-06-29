module.exports = (sequelize, DataTypes) => {

    const Notification = sequelize.define('notification', {
        title: {
            type: DataTypes.TEXT
        },
        message: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.STRING
        },
    });

    return Notification;
}