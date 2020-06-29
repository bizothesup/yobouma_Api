module.exports = (sequelize, DataTypes) => {

    const Note = sequelize.define('note', {
        niveau: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.TEXT
        },
    });


    return Note;
}