module.exports = (sequelize, DataTypes) => {

    const Setting = sequelize.define('setting', {
        title: {
            type: DataTypes.STRING
        },
        footer: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
    });

    return Setting;
}