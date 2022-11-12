import gql from 'graphql-tag'

const insert_company = gql`
mutation MyMutation($about_company: String = "", $address: String = "", $licence_number: Int = 10, $name: String = "") {
  insert_seller_company(objects: {about_company: $about_company, address: $address, licence_number: $licence_number, name: $name}) {
    returning {
      name
      seller {
        email
        first_name
        last_name
      }
    }
  }
}
`
const seller_login = gql`
mutation MyMutation(  $password: String!, $username: String!) {
  loginseller(inputs: {password: $password, username: $username}) {
    accestoken
  }
}
`
const seller_signup = gql`
mutation MyMutation($fname: String!, $lname: String!,$password:String!, $email: String!, $address: String!,$username:String!) {
  signupseller(inputs: {fname: $fname, lname: $lname, email: $email, address: $address, password: $password, username: $username}) {
    success
  }
}
`
export {insert_company,seller_login,seller_signup}