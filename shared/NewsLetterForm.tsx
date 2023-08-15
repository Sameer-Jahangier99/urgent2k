"use client";
import { Formik, Form, ErrorMessage } from "formik";
import { useCallback } from "react";
import * as yup from "yup";

// Styles
import styles from "@/styles/common/components/newsletter.module.css";

const FormikChatInputField: React.FC = () => {
  // Validation Schema
  const validationSchema = yup.object({
    email: yup.string().required("Required").email("Email is not valid"),
  });

  const handleChange = useCallback(
    (e: { target: { value: String } }, setFieldValue: any) => {
      const modifiedValue = e.target.value;
      setFieldValue("email", modifiedValue);
    },
    []
  );

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ isSubmitting, errors, touched, setFieldValue }) => (
        <Form>
          <div className="d-flex w-100 position-relative">
            <input
              id="email"
              name="email"
              placeholder="info@gmail.com"
              className={`${styles.newLetterInputField} flex-grow-1 py-3 px-1 ${
                errors?.email && "field-error"
              }`}
              onChange={(event) => handleChange(event, setFieldValue)}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${styles.newsLetterSubmitButton} px-4`}
            >
              Subscribe
            </button>
          </div>
          {errors?.email && touched?.email && (
            <p className="error-text">{errors?.email}</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormikChatInputField;
