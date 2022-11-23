import gql from 'graphql-tag';
const LOGIN_QUERY = gql`
mutation MyMutation($email: String!, $password: String!) {
  logindeliveragent(inputs: {email: $email, password: $password}) {
    accestoken
  }
}
`
const SIGNUP_QUERY = gql`
mutation MyMutation($fname: String!, $lname: String!, $password: String!, $username: String!, $email: String!, $address: String!) {
  signupdeliveragent(inputs: {address: $address, email: $email, fname: $fname, lname: $lname, password: $password, username: $username}) {
    success
  }
}
`
const query_orders = gql`
query MyQuery {
  product_orders {
    buyer {
      address
      first_name
      email
      last_name
      id
    }
    p_option {
      product {
        seller {
          address
          email
          id
          first_name
          last_name
        }
        name
      }
    }
  }
}
`
const query_live_messages = gql`
subscription MySubscription {
messages_seller_delivery(order_by: {created_at: asc}) {
    chat_seller_deliveries {
      deliver_agent {
        address
        email
        first_name
        last_name
      }
      seller {
        email
        address
        first_name
        last_name
      }
    }
    created_at
    is_my_message
    message
  }
}
`

const insert_message = gql`
mutation MyMutation($seller_id: Int!, $message: String!) {
  insert_messages_seller_delivery(objects: {chat_seller_deliveries: {data: {seller_id: $seller_id}}, message: $message}) {
    returning {
      message
    }
  }
}
`
const detail_message =    gql`
subscription MySubscription($id: Int!) {
  messages_seller_delivery(distinct_on: sender_id) {
    chat_seller_deliveries(where: {seller_id: {_eq: $id}}) {
      id
      deliver_agent {
        address
        email
        first_name
        last_name
      }
      seller {
        email
        address
        first_name
        last_name
      }
    }
    created_at
    is_my_message
    message
  }
}
`
export { LOGIN_QUERY, SIGNUP_QUERY, query_orders, query_live_messages, insert_message,detail_message  };