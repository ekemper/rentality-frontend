export default class RentalHelpers {
  parseQueryResponse (eSQueryResponse) {
    let rentalsArray = eSQueryResponse['data']['hits']['hits']
    let result = this.normalizeRentalsById(rentalsArray)
    return result
  }

  normalizeRentalsById (rentalsArray) {
    let rentalsById = {}
    let ithRental
    for (var i = 0; i < rentalsArray.length; i++) {
      ithRental = rentalsArray[i]
      rentalsById[ ithRental['_id'] ] = ithRental
    }
    return rentalsById
  }
}

