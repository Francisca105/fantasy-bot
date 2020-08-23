const { DataTypes, Model } = require('sequelize');

module.exports = class Ticket extends Model {
    static init(sequelize) {
        return super.init({
            ticketId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            authorId: { type: DataTypes.STRING },
            channelId: { type: DataTypes.STRING },
            guildId: { type: DataTypes.STRING },
            resolved: { type: DataTypes.BOOLEAN },
            messages: { type: DataTypes.TEXT },
            closeMessageId: { type: DataTypes.STRING },
            additionalUsers: { type: DataTypes.TEXT }
        }, {
            tableName: 'Tickets',
            timestamps: true,
            sequelize
        });
    }
}