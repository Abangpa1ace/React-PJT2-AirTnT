var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

let usersDB = require('../database/usersData');

const regexNotKor =  /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
const regexEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;

router.post('/signup', async (req, res, next) => {
  try {
    const body = req.body;
    let response = {
      success: false,
      message: 'Unknown Error',
    }

    // Inappropriate Logic
    const errorMessage = checkSignUpError(body, usersDB);
    if (errorMessage) {
      response.message = errorMessage;
    }
    // Appropriate Logic
    else {
      response = successMessage();
      const hashedPassword = await bcrypt.hash(body.password, 10);
      usersDB.push({
        id: Date.now().toString(),
        ...body,
        password: hashedPassword,
      })
    }
    res.json(response);
  }
  catch(err) {
    throw new Error(err);
  }
  next();
})

router.post('/signin', (req, res, next) => {
  try {
    const response = checkSignIn(req, usersDB);
    return res.json(response);
  }
  catch(err) {
    throw new Error(err);
  }
  next();
})


// SignUp Functions
const checkSignUpError = (body, usersDB) => {
  const { firstName, lastName, email, password } = body;
  const undefinedValue = Object.values(body).map(bodyVal => bodyVal.length).includes(0);
  const existingEmail = usersDB.length !== 0 && usersDB.find(user => email === user.email);

  if (undefinedValue) {
    return 'Undefined Value Exist'
  }
  else if (regexNotKor.test(firstName) || regexNotKor.test(lastName)) {
    return 'Not Valid Name'
  }
  else if (!regexEmail.test(email)) {
    return 'Not Valid Email'
  }
  else if (existingEmail) {
    return  'Already Existing Email'
  }
  else if (!regexPwd.test(password)) {
    return 'Not Valid Password'
  }
  else {
    return undefined;
  }
}

const successMessage = () => {
  return {
    success: true,
    message: 'Success',
  }
}

// SignIn Functions
const checkSignIn = (req, usersDB) => {
  const { email, password } = req.body;
  const undefinedValue = !email || !password;
  const userExisted = usersDB.find((user) => email === user.email);
  let response = {
    success: false,
    message: 'Unknown Error',
  }

  if (undefinedValue) {
    response.message = 'Undefined Value Exist'
  }
  else if (!userExisted) {
    response.message = 'Not Existing Email'
  }
  else {
    const userCompared = bcrypt.compareSync(password, userExisted.password);
    if (!userCompared) {
      response.message = 'Unmatched Password'
    }
    else {
      const token = jwt.sign(req.body, 'MY_SECRET_KEY');
      response = {
        success: true,
        message: 'Success',
        token: token,
      }
    }
  }
  return response;
}

module.exports = router;
