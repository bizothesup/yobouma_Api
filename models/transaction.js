module.exports = (sequelize, DataTypes) => {

    const Transaction = sequelize.define('transaction', {
        amount: {
            type: DataTypes.INTEGER
        },
        id_user_app: {
            type: DataTypes.INTEGER
        },
    });

    return Transaction;
}