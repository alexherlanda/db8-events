import { useState, useEffect } from 'react'

export const useFilters = () => {
  const [countries, setCountries] = useState([])
  const [months, setMonths] = useState([])
  const [monthsString, setMonthsString] = useState([])
  const [types, setTypes] = useState([])
  const [attendanceTypes, setAttendanceTypes] = useState([])
  const [format, setFormat] = useState([])
  const [query, setQuery] = useState('')

  const countriesHandler = (values) => {
    if (typeof values === 'string') {
      setCountries(values)
    } else {
      setCountries([...values])
    }
  }

  const monthsHandler = (values, textValues) => {
    if (typeof values === 'string') {
      setMonths(values)
    } else {
      setMonths([...values])
      setMonthsString([...textValues])
    }
  }

  const typesHandler = (values) => {
    if (typeof values === 'string') {
      setTypes(values)
    } else {
      setTypes([...values])
    }
  }

  const attendanceTypesHandler = (values) => {
    if (typeof values === 'string') {
      setAttendanceTypes(values)
    } else {
      setAttendanceTypes([...values])
    }
  }

  const formatHandler = (values) => {
    if (typeof values === 'string') {
      setFormat(values)
    } else {
      setFormat([...values])
    }
  }

  const selectFilters = [
    {
      name: 'TYPES',
      placeholder: 'Tipo de Evento',
      options: [{ value: '', label: 'Todos' }, { value: 'Torneo', label: 'Torneo' }, { value: 'Taller', label: 'Taller' }],
      handler: typesHandler,
      value: types
    },
    {
      name: 'ATTENDANCETYPES',
      placeholder: 'Tipo de Asistencia',
      options: [{ value: '', label: 'Todos' }, { value: 'Virtual', label: 'Virtual' }, { value: 'Presencial', label: 'Presencial' }],
      handler: attendanceTypesHandler,
      value: attendanceTypes
    },
    {
      name: 'FORMATS',
      placeholder: 'Formato',
      options: [{ value: '', label: 'Todos' }, { value: 'BP', label: 'BP' }, { value: 'WSDC', label: 'WSDC' }, { value: 'Debate Político', label: 'Debate Político' }, { value: 'Karl Popper', label: 'Karl Popper' }],
      handler: formatHandler,
      value: format
    }
  ]

  const values = {
    countries,
    months
  }

  const reset = () => {
    [setCountries, setMonths, setTypes, setAttendanceTypes, setFormat].forEach(handler => handler([]))
  }

  useEffect(
    () => {
      const string = `${countries.toString() ? '&countries=' + countries.toString() : ''}${monthsString.toString() ? '&months=' + monthsString.toString() : ''}${types.toString() ? '&types=' + types.toString() : ''}${attendanceTypes.toString() ? '&attendanceTypes=' + attendanceTypes.toString() : ''}${format.toString() ? '&formatTypes=' + format.toString() : ''}`
      setQuery(string)
    }, [countries, monthsString, types, attendanceTypes, format]
  )

  return [selectFilters, values, countriesHandler, monthsHandler, query, reset]
}
