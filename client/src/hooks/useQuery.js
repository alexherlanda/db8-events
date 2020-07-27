import { useState, useEffect } from 'react'
import Axios from 'axios'

export const useQuery = () => {
  // Define constants
  const [all, setAll] = useState(false)

  const [search, setSearch] = useState('')

  const [filterUrl, setFilterUrl] = useState('')

  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Define handlers
  const allHandler = () => {
    if (!all) {
      setAll(true)
    } else {
      setAll(false)
    }
  }

  const searchHandler = (value) => {
    setSearch(value)
  };

  const filtersHandler = (value) => {
    setFilterUrl(value)
  };
  // Reducer
  const handler = (filter) => {
    switch (filter) {
      case 'all':
        return [all, allHandler, isLoading]
      case 'search':
        return [searchHandler, isLoading]
      case 'filters':
        return [filtersHandler, isLoading]
      default:
        throw Error(`Error: ${filter} is not a valid option`)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const uri = `/api/events${all ? '?all=true' : '?all='}${
        search ? '&search=' + search : ''
      }${filterUrl || ''}`
      const { data } = await Axios.get(uri)
      if (data.results) setEvents([...data.results])
      setIsLoading(false)
    };
    fetchData()
  }, [all, filterUrl, search])

  return [handler, events, isLoading]
};
