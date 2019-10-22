import { gql } from 'apollo-boost'

export const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
