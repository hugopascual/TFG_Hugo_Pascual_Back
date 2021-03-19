const {DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize');

// Definition of the Session model:

class Session extends Model {
}

Session.init({
        sid: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        expires: {
            type: DataTypes.DATE
        },
        data: {
            type: DataTypes.STRING(50000)
        }
    }, {
        sequelize
    }
);

module.exports = Session;