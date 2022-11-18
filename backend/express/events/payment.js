const Chapa = require('./payment/chap')
let myChapa = new Chapa('CHASECK_TEST-R2r7oy9nnhaZuJLpM47VxYVHZXadMkS6')
const QUERY_BUYER = `
query MyQuery($id: Int!) {
    buyer_by_pk(id: $id) {
      email
      first_name
      last_name
      id
    }
  }
`
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
/*
response:
    {
    message: 'Hosted Link',
    status: 'success' || 'failed',
    data: {
        checkout_url: 'https://checkout.chapa.co/checkout/payment/:token'
    },
    tx_ref: 'generated-token' // this will be the auto generated reference
    }
*/
const handler = async (req, res) => {
    
    const id = parseInt(req.body.event.session_variables['x-hasura-user-id']);
    const finduser = require('./payment/Finduser')
    const data = await finduser({ id: id }, QUERY_BUYER)
    if (data) {
        const customerInfo = {
            amount: '100',
            currency: 'ETB',
            email: data['data']['buyer_by_pk']['email'],
            first_name: data['data']['buyer_by_pk']['first_name'],
            last_name: data['data']['buyer_by_pk']['last_name'],
            // tx_ref: 'tx-x12345',
            callback_url: 'https://chapa.co', // your callback URL
            customization: {
                title: 'I love e-commerce',
                description: 'It is time to pay'
            }
        }
        try {
            let response = await chapa(customerInfo)
            console.log(response.data.checkout_url);
            return res.json(response.data.checkout_url)
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
    }
}
module.exports = handler