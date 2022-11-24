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
    category {
      name
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

const CATEGORY_FECTH = gql`
query MyQuery {
  category {
    id
    name
    sub_category_ids {
      c_id
      id
      name
    }
  }
}
`
const GET_PRODUCT_DETAIL = gql`
query MyQuery($id: Int!) {
  product_by_pk(id: $id) {
    about_product
    category {
      name
    }
    name
    p_options {
      difference
      id
      image_url
      name
      price
      is_user_added_to_cart
      is_user_added_to_order
    }
    seller {
      address
      company
      email
      first_name
      last_name
    }
    sub_category_ob {
      name
      id
    }
    created_at
    category_id
    id
  }
}

`

const ADD_ORDER = gql`
mutation MyMutation($id: Int!) {
  insert_orders(order_inputs: {id: $id}) {
    payment_url
  }
}

`
const INSERT_TO_CART = gql`
mutation MyMutation($id: Int!) {
  insert_cart(objects: {p_id: $id}) {
    returning {
      p_id
    }
  }
}
`
const QUERY_CART = gql`
query MyQuery {
  cart {
    buyer_id
   p_id
    p_option {
      name
      image_url
      id
      difference
      product {
      id
      name
        about_product
        category {
          name
          id
        }
        category_id
        name
        seller {
          address
          email
          first_name
          last_name
        }
      }
    }
  }
}
`
export { GET_PRODUCTS, buyer_signup, buyer_login, CATEGORY_FECTH, GET_PRODUCT_DETAIL, ADD_ORDER, INSERT_TO_CART,QUERY_CART }
