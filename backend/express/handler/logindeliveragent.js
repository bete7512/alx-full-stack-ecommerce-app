const bcrypt = require('bcrypt')
require('dotenv').config()
const find_query = `
query MyQuery($email: String!) {
    deliver_agent(where: {email: {_eq: $email}}) {
      first_name
      id
      last_name
      password
      email
      address
    }
  }
`
const jwt = require('jsonwebtoken')
const handler = async (req, res) => {
  const { email, password } = req.body.input.inputs;
  const finduser = require('../FInder/find')
  const data = await finduser({ email: email }, find_query)
  const user = data['data']["deliver_agent"]
  console.log(user);
  // console.log(user[0].id);
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
    console.log(user[0].id);
    const token = jwt.sign({
      "https://hasura.io/jwt/claims":
      {
        "x-hasura-allowed-roles": ["seller","superadmin","admin","buyer","deliveragent"],
        "x-hasura-default-role": "deliveragent",
        "x-hasura-user-id": `${user[0].id}`
      }
    }
      , process.env.SECRET_KEY)
    // console.log(token)
    // console.log(user.id);
    return res.json({
      accestoken: token,
    })
  }
};
module.exports = handler