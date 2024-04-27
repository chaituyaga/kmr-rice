const User = require("../models/usersModel");
const bsonId = require("bson").ObjectId;
const nodemailer = require("nodemailer");

let randomOtp = Math.floor(1000 + Math.random() * 9000);

exports.getIsUserExist = async (data) => {
  try {
    const res = await User.scan("USER_EMAIL").contains(data).exec();
    if (res.toJSON().length) {
      randomOtp = Math.floor(1000 + Math.random() * 9000);
      var transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: {
          user: process.env.MAILUSER,
          pass: process.env.MAILPASSWORD,
        },
      });

      var mailOptions = {
        from: process.env.MAILUSER,
        to: res.toJSON()[0].USER_EMAIL,
        subject: "OTP to Login into your Account",
        text: `hi ${res.toJSON()[0].USER_NAME} 
                  Please Use the OTP ${randomOtp} to sign into your account`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          throw err;
        } else {
          return {
            status: 200,
            body: true,
          };
        }
      });
      return {
        status: 200,
        body: true,
      };
    } else {
      return {
        status: 200,
        body: false,
      };
    }
  } catch (error) {
    return {
      status: 500,
      body: error.message,
    };
  }
};

exports.createAUser = async (data) => {
  try {
    const { uName, uEmail } = data;
    const isUserExist = await User.scan("USER_EMAIL").contains(uEmail).exec();
    if (isUserExist.toJSON().length) {
      return {
        status: 200,
        body: "User Already Exists",
      };
    } else {
      let newUserObj = {
        USER_ID: new bsonId().toString(),
        USER_EMAIL: uEmail,
        USER_NAME: uName,
      };
      const res = await User.create(newUserObj);
      return {
        status: 200,
        body: "User Created Successfully",
      };
    }
  } catch (error) {
    return {
      status: 400,
      body: error.message,
    };
  }
};

exports.validateOtp = async (data) => {
  const { otp } = data;
  if (randomOtp === Number(otp)) {
    randomOtp = Math.floor(1000 + Math.random() * 9000);
    return true;
  } else return false;
};
