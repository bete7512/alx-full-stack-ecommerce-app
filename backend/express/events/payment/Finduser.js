// const fetch =require('node-fetch')
require('dotenv').config()
const finduser = async (variables,querys) => {
    const fetchResponse = await fetch(
        "https://fullstack-ecommerce.hasura.app/v1/graphql",
        {
            method: 'POST',
            headers:{
                'x-hasura-admin-secret': 'myadminsecretkey'
              },
            body: JSON.stringify({
                query: querys,
                variables
            })
        });
    const data = await fetchResponse.json();
    // console.log('DEBUG: ', data);
    return data;
};

module.exports = finduser;