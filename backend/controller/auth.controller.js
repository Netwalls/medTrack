// const { User } = require('../schema/user.schema.js');

const { User } = require('../schema/user.schema.js');
const sendEmail = require('../mail/index.mail');
const Admin = require('../schema/admin.schema.js');
const Doctor = require('../schema/doctor.schma.js');

const signup = async (req, res) => {
    console.log('Signup request received');
    const { email, password, name } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered',
            });
        }

        // Ge nerate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log('Generated OTP:', otp); // Debug log

        // Create new user with OTP
        const user = new User({
            email,
            password,
            name,
            otp, // Make sure this is being set
            otpExpiry: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes expiry
            isVerified: false,
        });

        const savedUser = await user.save();
        console.log('Saved user:', savedUser); // Debug log

        // Send verification email
        console.log('Attempting to send email to:', email);
        await sendEmail({
            to: email,
            subject: 'One More Step, Verify Your Email',
            type: 'verification',
            message: {
                otp,
                name,
            },
        });
        console.log('Email sent successfully to:', email);

        res.status(200).json({
            success: true,
            message:
                'Signup successful. Please check your email for verification code.',
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            message: 'User not created',
        });
    }
};

module.exports = { signup };
const signupAdmin = async (req, res) => {
    console.log('Signup request received');
    const { email, password, name } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered',
            });
        }

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log('Generated OTP:', otp); // Debug log

        // Create new user with OTP
        const admin = new Admin({
            email,
            password,
            name,
            otp, // Make sure this is being set
            otpExpiry: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes expiry
            isVerified: false,
        });

        const savedAdmin = await admin.save();
        console.log('Saved admin:', savedAdmin); // Debug log

        // Send verification email
        console.log('Attempting to send email to:', email);
        await sendEmail({
            to: email,
            subject: 'One More Step, Verify Your Email',
            type: 'verification',
            message: {
                otp,
                name,
            },
        });
        console.log('Email sent successfully to:', email);

        res.status(200).json({
            success: true,
            message:
                'Signup successful. Please check your email for verification code.',
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            message: 'Admin not created',
        });
    }
};
const signupDoctor = async (req, res) => {
    console.log('Signup request received');
    const { email, password, name } = req.body;

    try {
        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered',
            });
        }

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log('Generated OTP:', otp); // Debug log

        // Create new user with OTP
        const doctor = new Doctor({
            email,
            password,
            name,
            otp, // Make sure this is being set
            otpExpiry: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes expiry
            isVerified: false,
        });

        const savedDoctor = await doctor.save();
        console.log('Saved doctor:', savedDoctor); // Debug log

        // Send verification email
        console.log('Attempting to send email to:', email);
        await sendEmail({
            to: email,
            subject: 'One More Step, Verify Your Email',
            type: 'verification',
            message: {
                otp,
                name,
            },
        });
        console.log('Email sent successfully to:', email);

        res.status(200).json({
            success: true,
            message:
                'Signup successful. Please check your email for verification code.',
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            message: 'Doctor not created',
        });
    }
};

const signin = async (req, res) => {
    console.log('Signin request received');
    const { email, password } = req.body;

    try {
        let user = await Admin.findOne({ email });
        let role = 'admin';

        if (!user) {
            user = await Doctor.findOne({ email });
            role = 'doctor';
        }

        if (!user) {
            user = await User.findOne({ email });
            role = 'user';
        }

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found. Please sign up first.',
            });
        }

        // Use the comparePassword method instead of direct comparison
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect password or username',
            });
        }

        await sendEmail({
            to: user.email,
            subject: 'New Sign In Detected',
            type: 'signin',
            message: {
                name: user.name,
                time: new Date().toLocaleString(),
                device: req.headers['user-agent'],
            },
        });

        res.status(200).json({
            success: true,
            message: 'Sign in successful',
            user: {
                email: user.email,
                _id: user._id,
            },
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            message: 'An error occurred during sign in',
        });
    }
};

const verifyOTP = async (req, res) => {
    console.log('Received verification request:', req.body);
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email });
        console.log('Found user:', user);
        console.log('Stored OTP:', user.otp);
        console.log('Received OTP:', otp);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        // Check if OTP matches and hasn't expired
        if (user.otp !== otp) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP',
            });
        }

        if (user.otpExpiry < new Date()) {
            return res.status(400).json({
                success: false,
                message: 'OTP has expired',
            });
        }

        // Update user verification status using findOneAndUpdate
        const updatedUser = await User.findOneAndUpdate(
            { email },
            {
                $set: {
                    isVerified: true,
                    otp: undefined,
                    otpExpiry: undefined,
                },
            },
            { new: true }
        );

        // Send success verification email
        await sendEmail({
            to: email,
            subject: 'Email Verified Successfully - Welcome to Ahia-Oma',
            type: 'verifySuccess',
            message: {
                name: user.name,
            },
        });

        res.status(200).json({
            success: true,
            message: 'Email verified successfully. You can now login.',
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            message: 'Error verifying OTP',
        });
    }
};
const forgotPassword = async (req, res) => {
    console.log('Forgot password request received');
    const { email } = req.body;

    try {
        console.log('Searching for email:', email);
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Email not found',
            });
        }

        await sendEmail({
            to: email,
            subject: 'Reset Your Password',
            type: 'resetPassword',
            message: {
                name: user.name,
                email: email,
            },
        });

        res.status(200).json({
            success: true,
            message: 'Reset instructions sent to your email',
            user: { email: user.email },
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            message: 'An error occurred during forgot password',
        });
    }
};
const resendOTP = async (req, res) => {
    const { email } = req.body;
    console.log('Resend OTP request for:', email);

    try {
        // First find the user without creating/updating
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        // Generate new OTP
        const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
        console.log('Generated new OTP:', newOTP);

        // Update only the OTP fields
        await User.findOneAndUpdate(
            { email },
            {
                $set: {
                    otp: newOTP,
                    otpExpiry: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
                },
            },
            { new: true }
        );

        // Send new OTP email
        await sendEmail({
            to: email,
            subject: 'New Verification Code',
            type: 'verification',
            message: {
                otp: newOTP,
                name: existingUser.name,
            },
        });

        res.status(200).json({
            success: true,
            message: 'New verification code sent to your email',
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            message: 'Could not resend verification code',
        });
    }
};

module.exports = {
    signupAdmin,
    signup,
    signin,
    verifyOTP,
    forgotPassword,
    resendOTP,
    signupDoctor,
};
