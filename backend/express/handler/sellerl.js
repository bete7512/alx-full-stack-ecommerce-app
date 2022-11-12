const bcrypt = require('bcrypt')
require('dotenv').config()
const find_query = `
query MyQuery($email: String = "") {
	seller(where: {email: {_eq: $email}}, limit: 1) {
	  email
	}
  }
`
const jwt = require('jsonwebtoken')
const handler = async (req, res) => {
  const { email, password } = req.body.input.inputs;
  const finduser = require('../FInder/find')
console.log(email);
  const { data } = await finduser(email,find_query)
  console.log(data);
  // const user = data["seller"][0]
  // console.log(data["seller"][0])
//   if (!user) {
//     return res.status(400).json({
//       message: 'incorrect username or password please enter again'
//     })
//   }
//   else {
//     const value = await bcrypt.compareSync(password, user.password)
//     if (!value) {
//       return res.status(400).json({
//         message: "incorrect password"
//       })
//     }
//     const token = jwt.sign({
//       "https://hasura.io/jwt/claims":
//       {
//         "x-hasura-allowed-roles": ["seller"],
//         "x-hasura-default-role": "seller",
//         "x-hasura-user-id": `${user.id}`
//       }
//     }
//       , process.env.SECRET_KEY)
//     console.log(token)
//     return res.json({
//       accesstoken: token,
//       // id: user.id,
//       // ...data.users
//     })
//   }
};
module.exports = handler