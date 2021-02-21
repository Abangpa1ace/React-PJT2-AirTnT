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
    const response = signUpResponse(body);
    if (response.success) {
      const hashedPassword = bcrypt.hashSync(body.password, 10);
      usersDB.push({ id: Date.now().toString(), ...body, password: hashedPassword })
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
    const body = req.body;
    const response = signInResponse(body);
    if (response.success) {
      const token = jwt.sign(body, 'MY_SECRET_KEY');
      response['token'] = token;
    }
    res.json(response)
  }
  catch(err) {
    throw new Error(err);
  }
  next();
})

// Sign-Up Validator & Function
const signUpValidator = {
  firstName: (value) => {
    return !value
      ? 'Undefined Value Exist'
      : regexNotKor.test(value)
      ? 'Not Valid Name'
      : undefined;
  },
  lastName: (value) => {
    return !value
      ? 'Undefined Value Exist'
      : regexNotKor.test(value)
      ? 'Not Valid Name'
      : undefined;
  },
  email: (value) => {
    return !value
      ? 'Undefined Value Exist'
      : !regexEmail.test(value)
      ? 'Not Valid Email'
      : usersDB.find(user => value === user.email)
      ? 'Already Existing Email'
      : undefined;
  },
  password: (value) => {
    return !value
      ? 'Undefined Value Exist'
      : !regexPwd.test(value)
      ? 'Not Valid Password'
      : undefined;
  }
}

const signUpResponse = (body) => {
  let message;
  for (let key in body) {
    message = signUpValidator[key](body[key]);
  }
  return ({
    success: !message,
    message: !message ? 'Success' : message,
  })
}

// Sign-In Validator & Function
const signInValidator = {
  email: (value, matchedUser) => {
    return !value
      ? 'Undefined Value Exist'
      : !regexEmail.test(value)
      ? 'Not Valid Email'
      : !matchedUser
      ? 'Not Existing Email'
      : undefined;
  },
  password: (value, matchedUser) => {
    return !value
      ? 'Undefined Value Exist'
      : !regexPwd.test(value)
      ? 'Not Valid Password'
      : !bcrypt.compareSync(value, matchedUser.password)
      ? 'Unmatched Password'
      : undefined;
  }
}

const signInResponse = (body) => {
  let message;
  const matchedUser = usersDB.find(user => body.email === user.email);
  for (let key in body) {
    message = signInValidator[key](body[key], matchedUser);
  }
  return ({
    success: !message,
    message: !message ? 'Success' : message,
  })
}

module.exports = router;
