import React from "react";
import Textfield from "../elements/Form/Textfield";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
const EventForm = ({ apiCall, eventData }) => {
  const onSubmit = async (values, actions) => {
    try {
      const postData = await apiCall(values, actions);
      if (postData) {
        actions.resetForm();

        alert("Successfully Done");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
    actions.resetForm();
  };

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: eventData?.title || "",
      weddingDecription: eventData?.weddingDecription || "",
      startTime: eventData?.startTime || "",
      endTime: eventData?.endTime || "",
    },
    enableReinitialize: true,
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className="genericForm">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group mb-3">
          <Textfield
            label="Title"
            value={values.title}
            onChange={handleChange}
            name="title"
            placeholder="Enter title"
            onBlur={handleBlur}
            className={`form-control ${
              errors.title && touched.title ? "is-invalid" : ""
            }`}
          />

          {errors.title && touched.title && (
            <p className="invalid-feedback"> {errors.title}</p>
          )}
        </div>
        <div className="form-group  mb-3">
          <Textfield
            value={values.weddingDecription}
            onChange={handleChange}
            label="Description"
            name="weddingDecription"
            placeholder="Enter description"
            onBlur={handleBlur}
            className={`form-control ${
              errors.weddingDecription && touched.weddingDecription
                ? "is-invalid"
                : ""
            }`}
          />
          {errors.weddingDecription && touched.weddingDecription && (
            <p className="invalid-feedback"> {errors.weddingDecription}</p>
          )}
        </div>
        <div className="form-group  mb-3">
          <Textfield
            value={values.startTime}
            onChange={handleChange}
            type="datetime-local"
            label="Start Time"
            name="startTime"
            placeholder="Start time"
            onBlur={handleBlur}
            className={`form-control ${
              errors.startTime && touched.startTime && touched.startTime
                ? "is-invalid"
                : ""
            }`}
          />
          {errors.startTime && touched.startTime && (
            <p className="invalid-feedback"> {errors.startTime}</p>
          )}
        </div>
        <div className="form-group  mb-3">
          <Textfield
            value={values.endTime}
            onChange={handleChange}
            type="datetime-local"
            label="End Time"
            name="endTime"
            placeholder="End time"
            onBlur={handleBlur}
            className={`form-control ${
              errors.endTime && touched.endTime ? "is-invalid" : ""
            }`}
          />
          {errors.endTime && touched.endTime && (
            <p className="invalid-feedback"> {errors.endTime}</p>
          )}
        </div>
        <div className="text-center">
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
