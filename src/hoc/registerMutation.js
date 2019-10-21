import { gql } from 'apollo-boost'

export const REGISTER_MUTATION = gql`
  mutation signup($input: UserCredentials!) {
     signup(input: $input)
  }
`
