module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        nom_prenom: {
            type: DataTypes.STRING
        },
        telephone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        mdp: {
            type: DataTypes.STRING
        },
        statut: {
            type: DataTypes.STRING
        },
    });

    return User;
}