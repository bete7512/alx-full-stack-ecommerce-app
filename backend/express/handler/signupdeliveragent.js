require('dotenv').config()
const bcrypt = require('bcrypt')
const HASURA_SIGNUP_OPERATION = `
mutation MyMutation($address: String!, $email: String!, $first_name: String!, $last_name: String!, $password: String!) {
    insert_deliver_agent(objects: {address: $address, email: $email, first_name: $first_name, last_name: $last_name, password: $password}) {
      affected_rows
    }
  }
  
`;
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
	console.log(data);
	return data;
};
const handler = async (req, res) => {
	console.log(req.body);
	console.log("hjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
	const { fname, lname, email, password, address } = req.body.input.inputs;
	const finduser = require('../FInder/find')
	const { data, error } = await finduser({email:email}, find_query)
	console.log(data);
	console.log("from here");
	const user = data["deliver_agent"]
	if (user.length > 0) {
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
		console.log("one step here");
		const { data, errors } = await execute(variables);
		console.log(data);
		if (data) {
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