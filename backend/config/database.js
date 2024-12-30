
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DB_DIALECT) {
    throw new Error('DB_DIALECT is not defined in the environment variables.');
}

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT.trim(),
        logging: false,
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database Connection Established Successfully');
    } catch (error) {
        console.error('Database Connection Error:', error);
    }
})();

export default sequelize;
