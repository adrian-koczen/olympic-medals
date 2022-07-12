import React from "react";
// Formik
import { useFormik } from "formik";
// Data
import countries from "src/data/countries.json";
// Components
import Box from "src/components/Box/Box";
import Select from "src/views/AddCountry/Select/Select";
import Medal from "./Medal/Medal";
// Styled components
import styled from "styled-components";
// Interfaces/Types
import { Medals } from "./interfaces";

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

  const updateCountry = (countryName: string, countryCode: string) => {
    formik.setFieldValue("countryCode", countryCode);
    formik.setFieldValue("countryName", countryName);
  };

  const updateMedals = (medals: Medals) => {
    formik.setFieldValue("medals", medals);
  };

  return (
    <Box title="Add country">
      <Form onSubmit={formik.handleSubmit}>
        <FormElement>
          <Label>Country</Label>
          <Select
            countries={countries}
            placeholder={formik.values.countryName}
            updateCountry={updateCountry}
          ></Select>
        </FormElement>
        <Label>Medals</Label>
        <FormElement>
          <Label>Bronze</Label>
          <Medal
            name="medals.bronze"
            value={formik.values.medals.bronze}
            onChange={formik.handleChange}
          />
        </FormElement>
        <FormElement>
          <Label>Silver</Label>
          <Medal
            name="medals.silver"
            value={formik.values.medals.silver}
            onChange={formik.handleChange}
          />
        </FormElement>
        <FormElement>
          <Label>Gold</Label>
          <Medal
            name="medals.gold"
            value={formik.values.medals.gold}
            onChange={formik.handleChange}
          />
        </FormElement>
        <button type="submit">Hello</button>
      </Form>
    </Box>
  );
};

const FormElement = styled.div`
  margin: 8px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
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
