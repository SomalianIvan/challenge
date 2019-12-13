import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import * as SearchActions from '../ducks/Search/actions';

const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media only screen  and (min-width : 1224px) {
        //handle desktops
    }

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        //handle mobile
    }
`;
// stateless component would be in a different folder for react components
export const SearchForm = ({
  /* eslint-disable react/prop-types */
  isSubmitting,
  handleChange,
  handleSubmit,
  /* eslint-enable */
}) => (
  <FormWrapper>
    <form onSubmit={handleSubmit}>
      <input
        id="location"
        placeholder="City, Neighbourhood or MLS® number"
        type="text"
        onChange={handleChange}
      />
      <input
        id="min_price"
        placeholder="Min Price"
        type="text"
        onChange={handleChange}
      />
      <input
        id="max_price"
        placeholder="Max Price"
        type="text"
        onChange={handleChange}
      />
      <input
        id="beds"
        placeholder="Beds"
        type="text"
        onChange={handleChange}
      />
      <input
        id="baths"
        placeholder="Baths"
        type="text"
        onChange={handleChange}
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  </FormWrapper>
);
const schema = Yup.object()
  .shape({
    location: Yup.string()
      .required('required'),
    min_price: Yup.string(),
    max_price: Yup.string(),
    beds: Yup.string(),
    baths: Yup.string(),
  });
const FormicSearchForm = withFormik({
  // this can replaced with validate method and be made asynchronous
  validationSchema: schema,
  handleSubmit: (values, { props }) => {
    props.submitForm(values);
  },
})(SearchForm);
const connectedForm = connect(
  null,
  (dispatch) => bindActionCreators(SearchActions, dispatch),
)(FormicSearchForm);
export default connectedForm;
