import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
);

SearchForm.propTypes = {
  // would handle proptypes here
};


const schema = Yup.object().shape({
  location: Yup.string().required('required'),
  min_price: Yup.string().required('required'),
  max_price: Yup.string().required('required'),
  beds: Yup.string().required('required'),
  baths: Yup.string().required('required'),
});

const Search = () => (
  <FormWrapper>
    <Formik
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={schema}
      component={SearchForm}
    />
  </FormWrapper>
);
export default Search;
