import { eachLike, somethingLike, integer } from '@pact-foundation/pact/dsl/matchers';

module.exports = {
  uponReceiving: 'a request to list all characters',
  withRequest: {
    method: 'GET',
    path: '/characters'
  },
  willRespondWith: {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: eachLike (
      {
        id: integer(1),
        name: somethingLike('Walter White'),
        age: integer(58)
      },
      { min: 5 }
    )
  }
}