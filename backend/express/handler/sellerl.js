const bcrypt = require('bcrypt')
require('dotenv').config()
const find_query = `
query MyQuery($email: String = "") {
	seller(where: {email: {_eq: $email}}, limit: 1) {
	  email
    id
    password
	}
  }
`
const jwt = require('jsonwebtoken')
const handler = async (req, res) => {
  const { email, password } = req.body.input.inputs;
  const finduser = require('../FInder/find')
  const data = await finduser({ email: email }, find_query)
  const user = data['data']["seller"]
  console.log(user);
  if (!user.length) {
    return res.status(400).json({
      message: 'incorrect username or password please enter again'
    })
  }
  else {
    const value = await bcrypt.compareSync(password, user[0].password)
    if (!value) {
      return res.status(400).json({
        message: "incorrect password"
      })
    }
    const token = jwt.sign({
      "https://hasura.io/jwt/claims":
      {
        "x-hasura-allowed-roles": ["seller"],
        "x-hasura-default-role": "seller",
        "x-hasura-user-id": `${user.id}`
      }
    }
      , process.env.SECRET_KEY)
    console.log(token)
    return res.json({
      accestoken: token,
    })
  }
};
module.exports = handler