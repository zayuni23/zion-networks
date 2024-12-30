
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import UserRoutes from './routes/user.routes.js';
import AdminRoutes from './routes/admin.routes.js';
import morgan from 'morgan';

dotenv.config();

const app = express();
app.use(cors({ 
    origin: 'http://localhost:3000',
    credentials: true,
 }));

app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for user-related API
app.use('/api/user', UserRoutes);
app.use('/api/admin', AdminRoutes);

app.use("/" ,(req, res,next)  => {
return res.status(200).send("Hello from server")
})
app.use((req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});


app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database Connection established successfully');

        await sequelize.sync({ force: false });
        console.log('Database Synchronized successfully');

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`App running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error occurred during server startup:', error);
    }
})();
