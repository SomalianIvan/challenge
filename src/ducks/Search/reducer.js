import { PUT_RESULTS, START_LOADING } from './actions';

const initialState = {
  isLoading: false,
  results: null,
};

const searchReducer = (state = initialState, action) => {
  if (action.type === START_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  } if (action.type === PUT_RESULTS) {
    return {
      ...state,
      results: action.results,
      isLoading: true,
    };
  }
  return state;
};

export default searchReducer;
