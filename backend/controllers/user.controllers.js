

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { User } from '../models/user.models.js';


// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// User Register Controller
export const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    // if (!userName || !email || !password) {
    //     return res.status(400).json({ message: 'All fields are required' });
    // }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists. Please login!' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Generate a verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');

        // Create the user
        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword,
            accountStatus: 'pending',
            verificationToken,
        });

        // Send verification email
        const verificationLink = `${process.env.CLIENT_URL}/verify?token=${verificationToken}`;
        console.log(verificationLink)
        await transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Verify Your Account',
            html: `<h1>Account Verification</h1>
                   <p>Please click the link below to verify your account:</p>
                   <a href="${verificationLink}">Verify Account</a>
                   <p> OR </p>
                   <strong>Click the link for verification
                   <h>${verificationLink}</h>`,
        });

        res.status(201).json({
            message: 'Registration successful. A verification email has been sent.',
            user: {
                id: newUser.id,
                email: newUser.email,
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// User verify Account
export const verifyUser = async (req, res) => {
    const { token } = req.query

    try {
        const user = await User.findOne({ where: { verificationToken: token }})

        if (!user) {
            return res.status(400).json({ message: 'Invalid Token'})
        }

        user.accountStatus = 'active';
        user.verificationToken = null;
        await user.save();

        res.status(200).json({ message: 'Verification Success'});

    }catch (error) {
        console.error('Verification error:', error);
        res.status(500).json({ message: 'Server Error'})
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validation of the fields
    if (!email || !password) {
        return res.status(400).json({ message: 'Fill in the required field' })
    }

    try {
        // Check if user Exists
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'Invalid credentials' });
        }

        // Check if passwords match 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Create JWT token
        const token = jwt.sign(
            { id: user.userId, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Send Token as a cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            // samesite: strict,
            maxAge: 3600000,
        });

        res.status(200).json({
            message: 'Login Successful',
            user: {
                id: user.userId,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error('Login error;', error);
        res.status(500).json({ message: 'server error' });
    }
}
