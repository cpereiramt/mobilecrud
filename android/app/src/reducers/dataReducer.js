import {DATA_LOADED, UPDATE_PLANETS_COUNT} from '../constants/action-types';

const initialState = {
  planets: [],
  totalPlanets: 0,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        planets: action.payload,
      };
    case UPDATE_PLANETS_COUNT:
      return {
        ...state,
        totalPlanets: action.payload,
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

export const updatePostCount = (totalPlanets) => {
  return {
    type: UPDATE_PLANETS_COUNT,
    payload: totalPlanets,
  };
};

export default dataReducer;
