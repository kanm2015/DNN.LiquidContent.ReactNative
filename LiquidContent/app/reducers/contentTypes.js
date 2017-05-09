import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const contentTypes = createReducer({}, {
  [types.RETRIEVED_CONTENT_TYPES](state, action) {
    return action.contentTypes;
  }
});

