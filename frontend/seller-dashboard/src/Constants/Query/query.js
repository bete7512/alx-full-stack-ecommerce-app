import gql from 'graphql-tag'

const insert_company = gql`
mutation MyMutation($address: String!, $name: String!, $about_company: String!) {
  insert_seller_company(objects: {name: $name, address: $address, about_company: $about_company}) {
    returning {
      name
      id
      licence_number
      address
      about_company
    }
  }
}
`
const seller_login = gql`
mutation MyMutation(  $password: String!, $email: String!) {
  loginseller(inputs: {password: $password, email: $email}) {
    accestoken
  }
}
`
const seller_signup = gql`
mutation MyMutation($username: String!, $password: String!, $lname: String = "", $fname: String!, $email: String!, $address: String!) {
  signupseller(inputs: {address: $address, email: $email, fname: $fname, lname: $lname, password: $password, username: $username}) {
    success
  }
}
`


export {insert_company,seller_login,seller_signup}