export default class RentalHelpers {
  parseQueryResponse (eSQueryResponse) {
    let result = eSQueryResponse['data']['hits']['hits']
    return result
  }
}

