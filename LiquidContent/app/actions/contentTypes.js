import * as types from './types'
import Api from '../lib/api'

export function getContentTypes(ingredientsInput) {
  return (dispatch, getState) => {
    return Api.get('/ContentTypes').then(resp => {
      dispatch(setRetrievedContentTypes(resp));
    }).catch((ex) => {
      console.log(ex);
    });
  }
}

export function getContentItems(id) {
  return (dispatch, getState) => {
    return Api.get('/ContentTypes').then(resp => {
      dispatch(setRetrievedContentItems(id.startsWith('0046') ? points1: points2));
    }).catch((ex) => {
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

export function setRetrievedContentItems(contentItems) {
  return {
    type: types.RETRIEVED_CONTENT_ITEMS,
    contentItems: contentItems
  }
}

const points1 = [{
  coordinate: {
    latitude: 37.78825,
    longitude: -122.4324
  },
  title: "point 1",
  desc: "point 1 desc"
}, {
  coordinate: {
    latitude: 37.78725,
    longitude: -122.4424
  },
  title: "point 2",
  desc: "point 2 desc"
}, {
  coordinate: {
    latitude: 37.78925,
    longitude: -122.4224
  },
  title: "point 3",
  desc: "point 3 desc"
}];

const points2 = [{
  coordinate: {
    latitude: 37.78825,
    longitude: -122.4324
  },
  title: "point 1",
  desc: "point 1 desc"
}];
