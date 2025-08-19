const jwt = require("jsonwebtoken");
const { signupSchema, signinSchema } = require("../middlewares/validator");
const User = require("../models/usersModel");
const { doHash, doHashValidation } = require("../utils/hashing");

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { error } = signupSchema.validate({ email, password });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists!" });
    }

    const hashedPassword = await doHash(password, 12);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const result = await newUser.save();
    result.password = undefined;

    res.status(201).json({
      success: true,
      message: "Your account has been created successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error!" });
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
        .json({ success: false, message: error.details[0].message });
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
exports.signout = async (req, res) => {
    res
    .clearCookie("Authorization")
    .status(200)
    .json({success:true, message: 'logged out successfuly'})

};

exports.sendverificationcode = async (req,res) => {
    const {email} = req.body;
    try{
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist!" });
    }
    if (existingUser.verified) {

    }
    const codeVerification = Math.floor( Math.random() * 1000000).toString();
    let info = await transport.sendmail({
      from: process.env.NODE_CODE_SENDING_EMAIL_ADRESS,
      to: existingUser.email,
      subject: "Verification Code",
      html:'<h1>' + codeValue + '</h1>'
    })

    if(info.accepted[0] === existingUser.email) {
      const hashedCodeValue = hmacProcess(codeValue, process.env.
        HMAC_VERIFICATION_CODE_SECRET);
        exisitingUser.verificationCode = hashedCodeValue;
        existingUser.verificationCodeValidation = Date.now()
        await existingUser.save();
        return res.status(200).json({success: true, message:'code sent!'})


    } 
    res.status(400).json({success: false, message: 'Code sent failed!'})
    } catch(error) {
        console.log(error);
    }
}