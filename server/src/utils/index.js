import { ObjectId } from 'mongodb'

const prepare = o => {
  if (o && o._id) {
    o._id = o._id.toString()
  }
  return o
}

const generateQuery = args => {
  let page = 1
  let rowsPerPage = 5
  let sortBy = {}
  const keywordArray = []
  const keywordOr = {}
  const datesBtwArray = []
  const datesBtwOr = {}
  const rangeBtwArray = []
  const rangeBtwOr = {}
  const idArray = []
  const idOr = {}
  const flagArray = []
  const flagOr = {}
  const ands = []
  let query = {}
  const keys = Object.keys(args)
  keys.forEach(key => {
    if (key === 'period') {
      const period = args[key]
      period.kind.forEach(kind => {
        const item = {}
        item[kind] = {}
        if (period.startDate) {
          item[kind].$gte = new Date(period.startDate)
        }
        if (period.endDate) {
          item[kind].$lte = new Date(period.endDate)
        }
        datesBtwArray.push(item)
      })
      datesBtwOr.$or = datesBtwArray
      ands.push(datesBtwOr)
    } else if (key === 'range') {
      const range = args[key]
      range.kind.forEach(kind => {
        const item = {}
        item[kind] = {}
        item[kind].$gte = range.min
        item[kind].$lte = range.max
        rangeBtwArray.push(item)
      })
      rangeBtwOr.$or = rangeBtwArray
      ands.push(rangeBtwOr)
    } else if (key === 'keywords') {
      const keywords = args[key]
      keywords.kind.forEach(kind => {
        keywords.keywords.forEach(key => {
          const item = {}
          item[kind] = { $regex: new RegExp(key) }
          keywordArray.push(item)
        })
      })
      keywordOr.$or = keywordArray
      ands.push(keywordOr)
    } else if (key === 'ids') {
      const ids = args[key]
      ids.kind.forEach(kind => {
        ids.ids.forEach(key => {
          const item = {}
          item[kind] = ObjectId(key)
          idArray.push(item)
        })
      })
      idOr.$or = idArray
      ands.push(idOr)
    } else if (key === 'flag') {
      const flag = args[key]
      flag.kind.forEach(kind => {
        const item = {}
        item[kind] = flag.flag
        flagArray.push(item)
      })
      flagOr.$or = flagArray
      ands.push(flagOr)
    } else if (key === 'pagination') {
      page = args[key].page
      rowsPerPage = args[key].rowsPerPage
      if (args[key].sortBy) {
        sortBy[args[key].sortBy] = args[key].descending ? -1 : 1
      } else sortBy = { created: -1 }
    }
  })
  if (ands.length > 1) {
    query = { $and: ands }
  } else if (datesBtwArray.length > 0) {
    query = datesBtwOr
  } else if (rangeBtwArray.length > 0) {
    query = rangeBtwOr
  } else if (keywordArray.length > 0) {
    query = keywordOr
  } else if (idArray.length > 0) {
    query = idOr
  } else if (flagArray.length > 0) {
    query = flagOr
  }
  return { query: query, page: page, rowsPerPage: rowsPerPage, sortBy: sortBy }
}

const capitalize = (inputString, first) => {
  let ret = ''
  if (first) {
    ret = inputString.charAt(0).toUpperCase() + inputString.slice(1)
  } else ret = inputString.toUpperCase()
  return ret
}

exports.prepare = prepare
exports.generateQuery = generateQuery
exports.capitalize = capitalize
