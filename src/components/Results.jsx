import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { selectIsLoading, selectResults } from '../ducks/Search/selectors';

const SearchResults = ({ results, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!results) {
    return <div>Nothing yet</div>;
  }
  return (
    <ul>
      {results.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool.isRequired,
};

SearchResults.defaultProps = {
  results: null,
}

export default connect(
  (state) => ({
    results: selectResults(state),
    isLoading: selectIsLoading(state),
  }),
)(SearchResults);
