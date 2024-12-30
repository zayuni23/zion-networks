
// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.withCredentials = true;

const initialState = {
    user: null,
    loading: false,
    error: null,
};

// Thunk to handle user registration
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/user/register',
                userData
            );
            toast.success('Registration successful! Check your email for verification');
            return response.data;
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed');
            return rejectWithValue(error.response?.data);
        }
    }
);

// Thunk to handle user Login
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/user/login',
                loginData,
                {
                    withCredentials: true,
                }
            );
            toast.success('Login Successful');
            return response.data;  // Fixed typo here (response.data)
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login Failed');
            return rejectWithValue(error.response?.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            document.cookie = 'token=; Max-Age=0;';
            toast.info('Logged out successfully.');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user || action.payload;  // Ensure backend sends user in payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
