module.exports = (sequelize, DataTypes) => {

    const Vehicule = sequelize.define('vehicule', {
        brand: {
            type: DataTypes.STRING,
        },
        model: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
        },
        numberplate: {
            type: DataTypes.STRING,
        },
        passager: {
            type: DataTypes.INTEGER
        },
        statut: {
            type: DataTypes.STRING,
        }
    });

    return Vehicule;
}