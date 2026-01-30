const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const register = async (req, res) => {
  try {
    // Implementation here
    const {name,email,password,role}=req.body;
    const userExists=await User.find({email});
    if(userExists.length>0){
      return res.status(400).json({message:"User already exists"})
    }
    const user = new User({
      name,
      email,
      password,
      role
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    // Implementation here
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
