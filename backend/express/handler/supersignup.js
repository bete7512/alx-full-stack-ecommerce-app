require('dotenv').config()
const bcrypt = require('bcrypt')
const fetch = require('node-fetch')
const HASURA_SIGNUP_OPERATION = `
mutation MyMutation($username: String!, $password: String!, $email: String!, $lname: String!, $fname: String!) {
 insert_users_one(object: {fname: $fname, lname: $lname, email: $email, username: $username, password: $password}) {
   id
 }
}
`;
const execute = async (variables) => {
	const fetchResponse = await fetch(
		"https://fullstack-ecommerce.hasura.app/v1/graphql",
		{
			method: 'POST',
			headers: {
				'x-hasura-admin-secret': 'KwDGpDWBN8ZVHTUH7ovT2y7UOHBK4J62R9F6a4ETnGnK7Pn7LJSaqQcATyDYtYgE'
			},
			body: JSON.stringify({
				query: HASURA_SIGNUP_OPERATION,
				variables
			})
		}
	);
	const data = await fetchResponse.json();
	console.log('DEBUG: ', data);
	return data;
};
const handler = async (req, res) => {
	console.log("what happened here");
	const { fname, lname, username, email, password } = req.body.input.arg1;
	const finduser = require('../checker/findusername')
	const { data, error } = await finduser({ username, email })
	const user = data["users"][0]
	if (user) {
		return res.status(400).json({
			message: 'you are  registered no registratrion again'
		})
	}
	else {
		const saltRounds = 10;
		const salt = bcrypt.genSaltSync(saltRounds);
		const hashed = bcrypt.hashSync(password, salt);
		const variables = {
			fname: fname,
			lname: lname,
			username: username,
			email: email,
			password: hashed
		}
		const { data, errors } = await execute(variables);
		if (data) {
			console.log(errors);
			console.log(data)
			res.send({
				Success: "You are succefully registered"
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