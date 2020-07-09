import Fuse from 'fuse.js'

class SearchHandler {
  constructor (search, list) {
    this.search = search || ''
    this.list = list
    this.options = {
      keys: ['convenorsShortName', 'convenorsCompleteName', 'name', 'shortName'],
      threshold: 0.4
    }
    return this.fuse()
  }

  fuse () {
    if (this.search.length > 0) {
      const fuse = new Fuse(this.list, this.options)
      const results = fuse.search(this.search)
      return results.map(({ item }) => item)
    } else {
      return this.list
    }
  }
}

export default SearchHandler
