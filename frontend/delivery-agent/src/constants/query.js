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

export { LOGIN_QUERY, SIGNUP_QUERY }