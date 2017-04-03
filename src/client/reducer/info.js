// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

const initialState = Immutable.fromJS({
  info:
  { overview: 'this is my overview\nyes',
    team: [
      { first_name: 'will', last_name: 'smith' },
      { first_name: 'carlton', last_name: 'wills' },
    ],
    list1: ['item1', 'item2'],
    list2: ['item1', 'item2'],
  },
})

/* eslint no-unused-vars: ["error", { "args": "none" }]*/

const infoReducer =
  (state: Immut = initialState, action: { type: string, payload: any }) =>
    state

export default infoReducer
