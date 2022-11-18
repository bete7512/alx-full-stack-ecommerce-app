const QUERY_SELLER_HAVE_COMPANY = `
mutation MyMutation($id: Int!) {
    update_seller_by_pk(pk_columns: {id: $id}, _set: {have_company: true}) {
      have_company
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
                query: QUERY_SELLER_HAVE_COMPANY,
                variables
            })
        }
    );
    const data = await fetchResponse.json();
    return data;
};
const handler = async (req, res) => {
    // console.log(parseInt(req.body.event.session_variables['x-hasura-user-id']));
    const id  = parseInt(req.body.event.session_variables['x-hasura-user-id']);
    const variables = {
        id: id
    }
    const { data, errors } = await execute(variables);
    if (data) {
        console.log(data);
        return res.json({
            message: "company created",
            data: data
        })
    }
    if (errors) {
        return res.status(400).json({
            message: "error",
            errors: errors
        })
    }
}
module.exports = handler