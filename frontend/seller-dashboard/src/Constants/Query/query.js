import gql from 'graphql-tag'

const insert_company = gql`
mutation MyMutation($about_company: String!, $address: String!, $licence_number: Int!, $name: String!) {
  insert_seller_company(objects: {about_company: $about_company, address: $address, licence_number: $licence_number, name: $name}) {
    returning {
      name
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
const seller_company = gql`
query MyQuery {
  seller_company(where: {seller: {have_company: {_eq: true}}}) {
    about_company
    address
    licence_number
    id
    name
    owner
    verified
  }
}
`
const product_query = gql`
query MyQuery {
  product {
    about_product
    category {
      id
      name
      sub_category_ids {
        name
        id
      }
    }
    created_at
    id
    name
    p_options {
      difference
      id
      image
      name
      p_id
    }
  }
}

`
const insert_product = gql`
mutation MyMutation($name: String = "", $about_product: String = "", $data: [p_options_insert_input!] = {}, $category_id: Int = 10, $sub_category_id: Int = 10) {
  insert_product(objects: {name: $name, about_product: $about_product, p_options: {data: $data}, category_id: $category_id, sub_category_id: $sub_category_id}) {
    returning {
      name
    }
  }
}
`
const category_query = gql`
query MyQuery {
  category {
    name
    id
    sub_category_ids {
      c_id
      id
      name
    }
  }
}
`
export {insert_company,seller_login,seller_signup,seller_company,insert_product,product_query,category_query}