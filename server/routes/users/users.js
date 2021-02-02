var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

let usersDB = [];

router.get('/', (req, res, next) => {
  res.render('users')
})

router.post('/signup', async (req, res, next) => {
  try {
    const body = req.body;
    const { firstName, lastName, email, password } = body;
    const regexName = /[가-힣]/g;
    const regexEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
    const existingEmail = usersDB.length !== 0 && usersDB.find(user => email === user.email);

    if (Object.values(body).map(bodyVal => bodyVal.length).includes(0)) {
      res.json({
        success: false,
        message: 'Undefined Value Exist',
      })
    }
    else if (!regexName.test(firstName) || !regexName.test(lastName)) {
      res.json({
        success: false,
        message: 'Not Valid Name',
      })
    }
    else if (!regexEmail.test(email)) {
      res.json({
        success: false,
        message: 'Not Valid Email',
      })
    }
    else if (existingEmail) {
        res.json({
          success: false,
          message: 'Already Existing Email',
        })
    }
    else if (!regexPwd.test(password)) {
      res.json({
        success: false,
        message: 'Not Valid Password',
      })
    }
    else {
      const hashedPassword = await bcrypt.hash(password, 10);
      usersDB.push({
        id: Date.now().toString(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      })
      res.json({
        success: true,
        message: 'Success',
      })
    }
  }
  catch(err) {
    throw new Error(err);
  }
  next();
})

router.post('/signin', async (req, res, next) => {
  try {
    const body = req.body;
    const { email, password } = body;

    const userExisted = usersDB.find((user) => email === user.email);
    if (!userExisted) {
      res.json({
        success: false,
        message: 'Not Existing Email',
      })
    }
    else {
      const userCompared = bcrypt.compareSync(password, userExisted.password);
      if (!userCompared) {
        res.json({
          success: false,
          message: 'Unmatched Password',
        })
      }
      else {
        const token = jwt.sign(req.body, 'MY_SECRET_KEY');
        res.json({
          success: true,
          message: 'SUCCESS',
          token: token,
        })
      }
    }
  }
  catch(err) {
    throw new Error(err);
  }
  next();
})

module.exports = router;
