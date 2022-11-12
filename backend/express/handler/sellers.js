require('dotenv').config()
const bcrypt = require('bcrypt')
const HASURA_SIGNUP_OPERATION = `
mutation MyMutation($email: String!, $first_name: String!, $last_name: String!, $password: String!, $address: String!) {
	insert_seller(objects: {email: $email, first_name: $first_name, last_name: $last_name, password: $password, address: $address}) {
	  returning {
		email
		first_name
		last_name
	  }
	}
  }
`;
const find_query = `
query MyQuery($email: String = "") {
	seller(where: {email: {_eq: $email}}, limit: 1) {
	  email
	}
  }
`
const execute = async (variables) => {
	const fetchResponse = await fetch(
		"http://localhost:8080/v1/graphql",
		{
			method: 'POST',
			headers: {
				'x-hasura-admin-secret': 'myadminsecretkey'
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
	const { fname, lname, email, password, address } = req.body.input.inputs;
	const finduser = require('../FInder/find')
	const { data, error } = await finduser(email, find_query)
	if (data) {
		return res.status(400).json({
			message: 'you are  registered no registratrion again'
		})
	}
	else {
		const saltRounds = 10;
		const salt = bcrypt.genSaltSync(saltRounds);
		const hashed = bcrypt.hashSync(password, salt);
		const variables = {
			first_name: fname,
			last_name: lname,
			email: email,
			password: hashed,
			address: address
		}
		const { data, errors } = await execute(variables);
		if (data) {
			console.log(data)
			res.send({
				success: "You are succefully registered"
			})
		}
		else {
			console.log(errors);
			res.send({
				message: "something went wrong please try again"
			})
		}
	}
};
module.exports = handler