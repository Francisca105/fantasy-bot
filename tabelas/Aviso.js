const { DataTypes, Model } = require('sequelize');

module.exports = class Aviso extends Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            avisado: { type: DataTypes.BOOLEAN },
            node: { type: DataTypes.STRING }
        }, {
            tableName: 'Aviso',
            timestamps: true,
            sequelize
        });
    }
}