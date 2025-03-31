const { User } = require("../schema/user.schema.js");

const updateProfile = async (req, res) => {
  console.log("Profile update request received:", req.body);
  const { email, gender, ageRange } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { 
        $set: {
          gender,
          ageRange,
          profileCompleted: true
        }
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: {
        email: updatedUser.email,
        name: updatedUser.name,
        gender: updatedUser.gender,
        ageRange: updatedUser.ageRange
      }
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({
      success: false,
      message: "Could not update profile",
    });
  }
};

module.exports = {
  updateProfile
}; 