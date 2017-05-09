import * as types from './types'
import Api from '../lib/api'

export function getContentTypes(ingredients) {
  return (dispatch, getState) => {
    return Api.get('/ContentTypes').then(resp => {    
      dispatch(setRetrievedContentTypes(resp));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setRetrievedContentTypes(contentTypes) {
  return {
    type: types.RETRIEVED_CONTENT_TYPES,
    contentTypes: contentTypes
  }
}
