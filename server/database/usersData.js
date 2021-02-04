const bcrypt = require('bcrypt');
const defaultPwd = bcrypt.hashSync('Dyek7273!', 10);

const usersData = [
  {
    id: Date.now(2020, 2, 1).toString(),
    firstName: 'Taeng',
    lastName: 'Kim',
    email: 'zxhomeco@hanmail.net',
    password: defaultPwd,
  },
]

module.exports = usersData;