const add_order = `
mutation MyMutation($buyer_id: Int!, $o_id: Int!, $reference_id: String!) {
    insert_order(objects: {buyer_id: $buyer_id, o_id: $o_id, reference_id: $reference_id}) {
      affected_rows
    }
  }
  
`
const insert_order = async (variables,query)=>{
	const fetchResponse = await fetch(
		"http://localhost:8080/v1/graphql",
		{
			method: 'POST',
			headers: {
				'x-hasura-admin-secret': 'myadminsecretkey'
			},
			body: JSON.stringify({
				query: add_order,
				variables
			})
		}
	);
	const data = await fetchResponse.json();
    console.log(data);
	return data;
}

module.exports = insert_order