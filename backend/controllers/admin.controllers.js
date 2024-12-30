
import { User } from '../models/user.models.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAndCountAll();
        // console.log(users)

        res.status(200).json({success: true, message: 'Users fetched successfully', users})
    } catch (error) {
        console.error('Error fetching users: ', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch users',
            error: error.message
        });
    }
};