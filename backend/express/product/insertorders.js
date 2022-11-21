const add_order = `
mutation MyMutation($buyer_id: Int!, $o_id: Int!, $reference_id: String!) {
	insert_product_orders(objects: {buyer_id: $buyer_id, p_id: $o_id, reference_id: $reference_id}) {
	  affected_rows
	  returning {
		buyer {
		  address
		}
	  }
	}
  }
`
const insert_order = async (variables,query)=>{
	const fetchResponse = await fetch(
		"https://fullstack-ecommerce.hasura.app/v1/graphql",
		{
			method: 'POST',
			headers: {
				'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECET
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