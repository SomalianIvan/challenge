import { PUT_RESULTS, START_LOADING } from './actions';

const initialState = {
  isLoading: false,
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
      isLoading: false,
    };
  }
  return state;
};

export default searchReducer;
