import React from 'react'
import ReactDOM from 'react-dom'
import { setContext } from '@apollo/client/link/context'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'

import ViewListRepos from './pages/ViewListRepos'
import './index.css'
import 'antd/dist/antd.css'

const { REACT_APP_BASE_URL, REACT_APP_TOKEN } = process.env

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: REACT_APP_TOKEN ? `Bearer ${REACT_APP_TOKEN}` : null
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: REACT_APP_BASE_URL })),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ViewListRepos />
  </ApolloProvider>,
  document.getElementById('root')
)
