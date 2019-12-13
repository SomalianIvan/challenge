export const searchKey = 'search'
export const selectResults = (state) => state[searchKey].results;
export const selectIsLoading = (state) => state[searchKey].isLoading;
