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
      image_url
      price
      name
      p_id
    }
  }
}

`
const insert_product = gql`
mutation MyMutation($about_product: String!, $category_id: Int!, $name: String!, $data: [p_options_insert_input!] = {}, $sub_category_id: Int!) {
  insert_product(objects: {about_product: $about_product, category_id: $category_id, name: $name, p_options: {data: $data}, sub_category_id: $sub_category_id}) {
    affected_rows
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
// const category_fetch = gql`
// query MyQuery {
//   category {
//     name
//     id
//     sub_category_ids {
//       name
//       id
//     }
//   }
// }

// `
const subcategory_query = gql`
query MyQuery {
  sub_category {
    c_id
    name
    id
  }
}
`
const file_upload = gql`
mutation MyMutation($base64str: String = "", $name: String = "", $type: String = "") {
  fileupload(base64str: $base64str, name: $name, type: $type) {
    file_path
  }
}
`

const query_orders = gql`
query MyQuery {
  product_orders {
    id
    buyer_id
    buyer {
      first_name
      email
      id
    }
    created_at
    p_option {
      difference
      image_url
      id
      name
      price
      product {
        about_product
        name
      }
    }
  }
}
`
export { insert_company, seller_login, seller_signup, seller_company,subcategory_query, insert_product, product_query, category_query, file_upload,query_orders }