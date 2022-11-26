import gql from 'graphql-tag';
const aggragteQuery = gql`
query MyQuery {
  buyer_aggregate {
    aggregate {
      count
    }
  }
  product_aggregate {
    aggregate {
      count
    }
  }
  seller_aggregate {
    aggregate {
      count
    }
  }
  deliver_agent_aggregate {
    aggregate {
      count
    }
  }
}
`;

const signup_mutation = gql`
mutation MyMutation($username: String = "", $password: String = "", $lname: String = "", $fname: String = "", $email: String = "") {
  signupsuperadmin(input: { email: $email, fname: $fname, lname: $lname, password: $password, username: $username}) {
    success
  }
}
`
const login_mutation = gql`
mutation MyMutation($email: String = "", $password: String = "") {
  loginsuper(inputs: {email: $email, password: $password}) {
    accestoken
  }
}
`
export { aggragteQuery, signup_mutation,login_mutation };