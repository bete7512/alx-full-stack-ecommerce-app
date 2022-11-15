import gql from "graphql-tag";
const GET_PRODUCTS = gql`
query MyQuery {
  product {
    name
    about_product
    created_at
    id
    p_options {
      difference
      id
      image_url
      name
      price
    }
    seller {
      address
      email
      first_name
      id
      last_name
    }
    sub_category_ob {
      name
      id
    }
  }
}
`
const buyer_signup = gql`
mutation MyMutation($username: String!, $password: String!, $lname: String!, $fname: String!, $email: String!, $address: String!) {
  signupbuyer(inputs: {address: $address, email: $email, fname: $fname, lname: $lname, password: $password, username: $username}) {
    success
  }
}
`
const buyer_login = gql`
mutation MyMutation($email: String!, $password: String!) {
  loginbuyer(inputs: {email: $email, password: $password}) {
    accestoken
  }
}
`


export {GET_PRODUCTS, buyer_signup, buyer_login}
