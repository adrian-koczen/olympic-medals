import React from "react";
// Formik
import { useFormik } from "formik";
import * as yup from "yup";
// Data
import countries from "src/data/countries.json";
// Context
import { useAppState } from "src/context/AppState";
// Components
import Box from "src/components/Box/Box";
import Select from "src/views/AddCountry/Select/Select";
import Medal from "./Medal/Medal";
import Button from "src/components/Button/Button";
// Styled components
import styled from "styled-components";
// Interfaces/Types
import { Medals } from "./interfaces";

const validationSchema = yup.object().shape({
  countryCode: yup.string().required("Please select country"),
  medals: yup.object({
    bronze: yup.number().min(0, "Field must be greater than or equal to 0"),
    silver: yup.number().min(0, "Field must be greater than or equal to 0"),
    gold: yup.number().min(0, "Field must be greater than or equal to 0"),
  }),
});

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
  const AppState = useAppState();

  const formik = useFormik({
    initialValues: formInitialValue,
    validationSchema: validationSchema,
    onSubmit: () => {
      addCountryToTable();
    },
  });

  const addCountryToTable = () => {
    const newElement = formik.values;
    AppState.addCountry(newElement);
    AppState.saveState();
  };

  return (
    <Box title="Add country">
      <Form onSubmit={formik.handleSubmit}>
        <FormElement>
          <Label>Country</Label>
          <Select
            countries={countries}
            placeholder={formik.values.countryName}
            setValue={formik.setFieldValue}
            errors={formik.errors.countryCode}
            setError={formik.setFieldError}
          ></Select>
        </FormElement>
        <Label>Medals</Label>
        <FormElement>
          <Label>Bronze</Label>
          <Medal
            name={Medals.bronze}
            value={formik.values.medals.bronze}
            onChange={formik.handleChange}
            setValue={formik.setFieldValue}
            errors={formik.errors.medals?.bronze}
          />
        </FormElement>
        <FormElement>
          <Label>Silver</Label>
          <Medal
            name={Medals.silver}
            value={formik.values.medals.silver}
            onChange={formik.handleChange}
            setValue={formik.setFieldValue}
            errors={formik.errors.medals?.silver}
          />
        </FormElement>
        <FormElement>
          <Label>Gold</Label>
          <Medal
            name={Medals.gold}
            value={formik.values.medals.gold}
            onChange={formik.handleChange}
            setValue={formik.setFieldValue}
            errors={formik.errors.medals?.gold}
          />
        </FormElement>
        <Button type="submit">Add country</Button>
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
