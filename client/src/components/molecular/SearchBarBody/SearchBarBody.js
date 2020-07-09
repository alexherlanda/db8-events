import React from 'react'
import { Select, Space, Button, DatePicker } from 'antd'
import locale from 'antd/es/date-picker/locale/es_ES'
import CountrySelect from '../../atomic/CountrySelect'

import { useFilters } from '../../../hooks/useFilters'

const { RangePicker } = DatePicker

export const SearchBarBody = ({ handlers }) => {
  const [selectFilters, values, countriesHandler, monthsHandler, query, reset] = useFilters()
  const { countries, months } = values
  const [filtersHandler, isLoading] = handlers('filters')

  const applyFiltersHandler = (e) => {
    e.preventDefault()
    filtersHandler(query)
  }

  const resetFiltersHandler = (e) => {
    e.preventDefault()
    reset()
    filtersHandler('')
  }

  return (
    <Space align='center'>
      <CountrySelect handler={countriesHandler} value={countries} isLoading={isLoading} />
      <RangePicker locale={locale} onChange={monthsHandler} value={months} format='MM/DD/YYYY' />
      {
        selectFilters.map(({ placeholder, name, options, handler, value }) => (
          <Select placeholder={placeholder} key={name} loading={isLoading} onChange={handler} value={value} options={options} />
        ))
      }
      <Button type='primary' onClick={e => applyFiltersHandler(e)}>Aplicar</Button>
      <Button type='danger' onClick={e => resetFiltersHandler(e)}>Borrar Filtros</Button>

    </Space>
  )
}
