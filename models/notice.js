const Sequelize = require('sequelize');

module.exports = class Notice extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Notice',
            tableName: 'notices',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }

    static associate(db){
        
    }
}