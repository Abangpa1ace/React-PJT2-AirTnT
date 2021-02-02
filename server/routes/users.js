var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

let usersDB = [];

router.get('/', (req, res, next) => {
  res.render('users')
})

router.post('/signup', async (req, res, next) => {
  // try {
  //   const { firstName, lastName, email, password } = req.body;
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   usersDB.push({
  //     id: Date.now().toString(),
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     password: hashedPassword,
  //   })
  // }
  // catch(err) {
  //   throw new Error(err);
  // }
  console.log(usersDB)
})

router.post('/signin', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userMatched = usersDB.find((userData) => email === userData.email);
    if (!userMatched) {
      console.log(usersDB, "Not Registered User")
    }
    else {
      console.log("success");
    }
    next();
  }
  catch(err) {
    throw new Error(err);
  }
})

module.exports = router;
