// const fetch =require('node-fetch')
require('dotenv').config()
const finduser = async (variables,querys) => {
    const fetchResponse = await fetch(
        "http://localhost:8080/v1/graphql",
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
    const {data} = await fetchResponse.json();
    console.log('DEBUG: ', data);
        // if(!data){
    //     console.log("fucked say me congratulation please");
    // }
    // else{
    //     console.log("seller doesnot registered");
    // }
    // console.log(error);
    return {data};
};

module.exports = finduser;