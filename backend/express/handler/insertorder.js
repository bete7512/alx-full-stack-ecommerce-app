const findproduct = require("../FInder/findproduct");
const finduser = require("../FInder/find");
const insert_order = require("../product/insertorders");
const Chapa = require('../payment/chapa')

const USER_QUERY = `
query MyQuery($id: Int!) {
    buyer_by_pk(id: $id) {
      email
      first_name
      last_name
      id
    }
  }
`
const handler = async (req, res) => {
    const u_id = parseInt(req.body.session_variables['x-hasura-user-id']);
    const { id } = req.body.input.order_inputs;
    const variables = { id };
    const data = await findproduct(variables);
    const { price } = data['data']['p_options_by_pk'];
    const user = await finduser({ id: u_id }, USER_QUERY);
    const { email, first_name, last_name } = user['data']['buyer_by_pk']
    // const first_name = user['data']['buyer_by_pk']['first_name']
    // const last_name = user['data']['buyer_by_pk']['last_name']




    //calling payment api
    let myChapa = new Chapa('CHASECK_TEST-R2r7oy9nnhaZuJLpM47VxYVHZXadMkS6')
    let chapa = async (customerInfo) => {
        try {
            const response = await myChapa.initialize(customerInfo, { autoRef: true })
            // console.log(response);
            return response
        } catch (err) {
            // console.log(err);
            return err
        }
    }
    const customerInfo = {
        amount: `${price}`,
        currency: 'ETB',
        email: email,
        first_name: first_name,
        last_name: last_name,
        // tx_ref: 'tx-x12345',
        callback_url: 'https://webhook.site/',
        return_url: 'http://localhost:5173/', // your callback URL
        customization: {
            title: 'I love e-commerce',
            description: 'It is time to pay'
        }
    }
    const chapa_response = await chapa(customerInfo)
    console.log(chapa_response);
    try {
        const order = await insert_order({ buyer_id: u_id, o_id: id, reference_id: chapa_response.tx_ref })
        console.log(order);
    } catch (error) {
        return res.status(400).json({ error: error.message })

    }
    return res.json({
        payment_url: chapa_response.data.checkout_url
    })
};
module.exports = handler