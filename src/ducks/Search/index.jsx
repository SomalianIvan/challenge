import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from './actions'

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

const SearchForm = ({
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

const schema = Yup.object().shape({
  location: Yup.string().required('required'),
  min_price: Yup.string(),
  max_price: Yup.string(),
  beds: Yup.string(),
  baths: Yup.string(),
});

const FormicSearchForm = withFormik({
  validationSchema: schema,
  handleSubmit: async (values, {props}) => {
      props.submitForm(values);
  }
})(SearchForm)

SearchForm.propTypes = {
  // would handle proptypes here
};

const connectedForm = connect(
  state => state,
  dispatch => bindActionCreators(SearchActions, dispatch)
)(FormicSearchForm)

export default connectedForm;
