// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../../shared/routes'

const initialState = Immutable.fromJS({
  nav: [
          { route: HOME_PAGE_ROUTE, label: 'Home' },
          { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
          { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
          { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
  ],
})

/* eslint no-unused-vars: ["error", { "args": "none" }]*/

const navigationReducer =
  (state: Immut = initialState, action: { type: string, payload: any }) =>
    state

export default navigationReducer
