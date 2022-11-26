require('dotenv').config()
const bcrypt = require('bcrypt')
const HASURA_SIGNUP_OPERATION = `
mutation MyMutation($email: String!, $first_name: String!, $last_name: String!, $password: String!){
	insert_supper_admin(objects: {email: $email, first_name: $first_name, last_name: $last_name, password: $password}){
	  returning{
		email
		first_name
		last_name
	  }
	}
  }
`;
const find_query = `
query MyQuery($email: String = "") {
	supper_admin(where: {email: {_eq: $email}}, limit: 1) {
	  email
    id
    password
	}
  }
`
const execute = async (variables) => {
	const fetchResponse = await fetch(
		"https://fullstack-ecommerce.hasura.app/v1/graphql",
		{
			method: 'POST',
			headers: {
				'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECET
			},
			body: JSON.stringify({
				query: HASURA_SIGNUP_OPERATION,
				variables
			})
		}
	);
	const data = await fetchResponse.json();
	console.log(data)
	return data;
};
const handler = async (req, res) => {
	const { fname, lname, email, password } = req.body.input.inputs;
	const finduser = require('../FInder/find')
	const { data, error } = await finduser({ email: email }, find_query)
	console.log(data);
	const user = data["supper_admin"]
	if (user.length) {
		console.log("for test purpose")
		return res.status(400).json({
			message: 'you are  registered no registratrion again'
		})
	}
	else {
		console.log("for test purpose")
		const saltRounds = 10;
		const salt = bcrypt.genSaltSync(saltRounds);
		const hashed = bcrypt.hashSync(password, salt);
		const variables = {
			first_name: fname,
			last_name: lname,
			email: email,
			password: hashed,
		}
		const { data, errors } = await execute(variables);
		if (data) {
			console.log("for test purpose" + data)
			res.send({
				success: "You are succefully registered"
			})
		}
		else {
			res.send({
				message: "something went wrong please try again"
			})
		}
	}
};
module.exports = handler