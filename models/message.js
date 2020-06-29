module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
        message: {
            type: DataTypes.TEXT
        },
    });

    return Message;
}