const { User } = require('../schema/user.schema.js');

const updateProfile = async (req, res) => {
    console.log('Profile update request received:', req.body);
    const { name, email, gender, ageRange } = req.body;

    // Validate gender
    if (gender && !['Men', 'Women'].includes(gender)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid gender value. Please choose "Men" or "Women".',
        });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found in database');
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        console.log('User found:', user);

        // Update the user profile
        const updatedUser = await User.findOneAndUpdate(
            { email },
            {
                $set: {
                    name,
                    gender,
                    ageRange,
                    profileCompleted: true, // Update the profile completion status
                },
            },
            { new: true } // Return the updated document
        );

        console.log('User updated:', updatedUser);

        // Respond with success
        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            user: updatedUser, // Send the updated user back
        });
    } catch (err) {
        console.error('Error during profile update:', err);
        res.status(500).json({
            success: false,
            message: 'Could not update profile',
        });
    }
};

module.exports = {
    updateProfile,
};
