import React, { useState, useEffect } from 'react'
import { Select } from 'antd'
import Axios from 'axios'

const { Option } = Select

export const CountrySelect = ({ handler, value, isLoading }) => {
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    const fetchList = async () => {
      const { data } = await Axios.get('https://restcountries.eu/rest/v2/all?fields=translations;alpha2Code')
      const list = data.map(({ alpha2Code, translations }) => {
        const { es } = translations
        return { code: alpha2Code, name: es }
      })
      setCountries(list)
    }
    fetchList()
  }, [])

  return (
    <Select mode='multiple' loading={!countries || isLoading} placeholder='Selecciona un país...' onChange={handler} value={value} style={{ minWidth: '10vw', maxWidth: '20vw' }}>
      {
        countries && countries.map(({ code, name }) => (<Option value={code} key={code}>({code}) {name}</Option>))
      }
    </Select>
  )
}
