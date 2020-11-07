import {DATA_LOADED, UPDATE_POSTS_COUNT} from '../constants/action-types';

const initialState = {
  films: [],
  totalFilms: 0,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        films: action.payload,
      };
    case UPDATE_POSTS_COUNT:
      return {
        ...state,
        totalFilms: action.payload,
      };
  }
  return state;
}

export const dataAvailable = (data) => {
  return {
    type: DATA_LOADED,
    payload: data,
  };
};

export const updatePostCount = (totalFilms) => {
  return {
    type: UPDATE_POSTS_COUNT,
    payload: totalFilms,
  };
};

export default dataReducer;
