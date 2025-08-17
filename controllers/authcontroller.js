const jwt = require('jsonwebtoken')
const {signupSchema } = require("../middlewares/validator");
const User = require("../models/usersModel");
const { doHash } = require("../utils/hashing")
exports.signup = async (req,res) =>{
    const {email,password} = req.body;
    try {
        const {error, value} = signupSchema.validate({email,password});

        if(error){
            return res.status(401).json({success:false, message: error.details[0].message})
        }
        const existingUser = await User.findOne({email});

        if (existingUser){
            return res
            .status(401)
            .json({success:false, message:"User already exists!"})
    } 

    const hashedPassword = await doHash(password, 12);

    const newUser = new User ({
        email,
        password:hashedPassword,
    })
    const result = await newUser.save ();
    result.password = undefined
    res.status(201).json({
        success:true, message:"Your account has been created successfuly ",
        result,
        
    });
}catch (error) {
        console.log(error);
    }
};


exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    const { error } = signinSchema.validate({ email, password });
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid input!" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email }).select("+password");
    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "User does not exist!" });
    }

    // Validate password
    const result = await doHashValidation(password, existingUser.password);
    if (!result) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials!" });
    }

    // Generate token
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        verified: existingUser.verified,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "8h" }
    );

    // Set cookie + response
    res
      .cookie("Authorization", "Bearer " + token, {
        expires: new Date(Date.now() + 8 * 3600000), // 8 hours
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        success: true,
        token,
        message: "Logged in successfully",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
};
