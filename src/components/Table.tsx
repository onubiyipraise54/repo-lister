import React, { FC } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'

import { columns } from './constants'

/**
 * A component that renders a table for repositories
 * @returns {ReactElement}
 */
const TableComponent: FC<any> = ({ dataSource }) => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

TableComponent.propTypes = {
  dataSource: PropTypes.array.isRequired
}

export default TableComponent
