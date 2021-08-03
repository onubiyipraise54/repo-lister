import React from 'react'
import { useQuery } from '@apollo/client'
import { GITHUB_REPOS } from '../graphql/queries'
import { Empty, Spin } from 'antd'
import TableComponent from '../components/Table'

const { REACT_APP_GITHUB_USER_NAME } = process.env

/**
 * Component that lists all repos in a table
 */
const ViewListRepos = () => {
  const { loading, error, data } = useQuery(GITHUB_REPOS, {
    variables: { login: REACT_APP_GITHUB_USER_NAME }
  })

  if (loading) {
    return (
      <div className='mx-auto'>
        <Spin size='large' />
      </div>
    )
  }

  if (error) {
    return (
      <div className='mt-32'>
        <h1 className='text-xl text-center mb-10'>An error occured!!!</h1>
        <Empty />
      </div>
    )
  }

  return (
    <div className='w-2/3 mx-auto mt-20'>
      <h1 className='text-xl '>List of repos and stars for each</h1>
      <TableComponent dataSource={data.user.repositories.nodes} />
    </div>
  )
}

export default ViewListRepos
