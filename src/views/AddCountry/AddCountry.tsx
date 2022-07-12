import React from "react";
// Formik
import { useFormik } from "formik";
// Data
import countries from "src/data/countries.json";
// Components
import Box from "src/components/Box/Box";
import Select from "src/views/AddCountry/Select/Select";
// Styled components
import styled from "styled-components";

const formInitialValue = {
  countryCode: "",
  countryName: "Select country",
  medals: {
    total: 0,
    bronze: 0,
    silver: 0,
    gold: 0,
  },
};

const AddCountry = () => {
  const formik = useFormik({
    initialValues: formInitialValue,
    onSubmit: (e) => {
      console.log(formik.values);
    },
  });

  const updateCountryName = (countryName: string, countryCode: string) => {
    formik.setFieldValue("countryCode", countryCode);
    formik.setFieldValue("countryName", countryName);
  };

  return (
    <Box title="Add country">
      <Form onSubmit={formik.handleSubmit}>
        <FormElement>
          <Label>Country name</Label>
          <Select
            countries={countries}
            placeholder={formik.values.countryName}
            updateCountryName={updateCountryName}
          ></Select>
        </FormElement>
        <FormElement>
          <Label>Medal count</Label>
        </FormElement>
        <button type="submit">Hello</button>
      </Form>
    </Box>
  );
};

const FormElement = styled.div`
  margin: 8px 0;
  width: 100%;
`;

const Label = styled.label`
  margin-right: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export default AddCountry;
