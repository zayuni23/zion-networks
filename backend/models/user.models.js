
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 

export const User = sequelize.define('User', {
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    userName: {  
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },

    password: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: true,
        },
    },

    subscriptionPlan: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Basic',
    },

    verificationToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    accountStatus: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },

    role: {
        type: DataTypes.ENUM('admin', 'customer'),
        allowNull: false,
        defaultValue: 'customer',
    },
},
{
    timestamps: true,
    tableName: 'users',
});
