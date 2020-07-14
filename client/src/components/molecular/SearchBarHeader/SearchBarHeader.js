import React from 'react'
import { Switch, Space, Button, Input } from 'antd'

const { Search } = Input

export const SearchBarHeader = ({ handleCollapse, value, handlers }) => {
  const textButton = value === 0 ? 'Ocultar Filtros' : 'Filtros'
  const [all, allHandler, allIsLoading] = handlers('all')
  const [searchHandler, searchIsLoading] = handlers('search')
  return (
    <Space align='center' size='large' style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <span>Ver todos</span>
        <Switch
          style={{ marginLeft: '5px' }}
          onClick={allHandler}
          checked={all}
          loading={allIsLoading}
        />
      </div>
      <Search
        placeholder='Buscar por evento u organizador...'
        enterButton
        loading={searchIsLoading}
        onSearch={searchHandler}
      />
      <Button onClick={(e) => handleCollapse(e)}>{textButton}</Button>
    </Space>
  )
}
