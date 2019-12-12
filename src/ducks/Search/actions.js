export const SUBMIT_FORM = 'Search/SUBMIT_FORM';
export function submitForm(values) {
  return {
    type: SUBMIT_FORM,
    values,
  };
}

export const START_LOADING = 'Search/START_LOADING';
export function startLoading() {
  return {
    type: START_LOADING,
  };
}
export const PUT_RESULTS = 'Search/PUT_RESULTS';
export function putResults(results) {
  return {
    type: PUT_RESULTS,
    results,
  };
}
