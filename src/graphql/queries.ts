import { gql } from '@apollo/client'

/**
 * Fetches all repos for a given user
 */
export const GITHUB_REPOS = gql`
  query ($login: String!) {
    user(login: $login) {
      repositories(first: 50) {
        totalCount
        nodes {
          name
          forkCount
          stargazerCount
        }
      }
    }
  }
`
