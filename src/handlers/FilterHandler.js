class FilterHandler {
  constructor (queries, events) {
    this.queries = queries
    this.events = this.filter(events)
  }

  filter (events) {
    const { all, countries, months, types, attendanceTypes, formatTypes } = this.queries
    return events.filter(event => (
      [
        this.activeFilter(event, all),
        countries ? this.countryFilter(event, countries) : true,
        months ? this.monthFilter(event, months) : true,
        types ? this.typeFilter(event, types) : true,
        attendanceTypes ? this.attendanceFilter(event, attendanceTypes) : true,
        formatTypes ? this.formatFilter(event, formatTypes) : true
      ].reduce((prev, current) => prev && current)
    )).sort((a, b) => a.startDate - b.startDate)
  }

  activeFilter (event, all) {
    return !(all === 'true') ? event.startDate >= new Date() : true
  }

  countryFilter (event, countries) {
    return countries.split(',').includes(event.country)
  }

  monthFilter (event, dates) {
    const [date1, date2] = dates.split(',').map(date => new Date(date))
    const { startDate, endDate } = event
    return startDate <= date2 && endDate >= date1
  }

  typeFilter (event, types) {
    // Please change text for ids or numbers!!!!
    const { text } = event.tags.filter(({ key }) => key === 'type')[0]
    return types.split(',').includes(text)
  }

  attendanceFilter (event, attendance) {
    const { text } = event.tags.filter(({ key }) => key === 'attendanceType')[0]
    return attendance.split(',').includes(text)
  }

  formatFilter (event, formats) {
    const { text } = event.tags.filter(({ key }) => key === 'formatType')[0]
    return formats.split(',').includes(text)
  }
}

export default FilterHandler
