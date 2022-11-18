// const fetch =require('node-fetch')
const PRODUCT_FOR_ORDER = `
query MyQuery($id: Int!) {
    p_options_by_pk(id: $id) {
      id
      price
    }
  }
`
require('dotenv').config()
const findproduct = async (variables) => {
    const fetchResponse = await fetch(
        "http://localhost:8080/v1/graphql",
        {
            method: 'POST',
            headers:{
                'x-hasura-admin-secret': 'myadminsecretkey'
              },
            body: JSON.stringify({
                query: PRODUCT_FOR_ORDER,
                variables
            })
        });
const data = await fetchResponse.json();
return data;
};

module.exports = findproduct;