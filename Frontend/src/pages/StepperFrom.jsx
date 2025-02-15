import React, { useState, useRef, useEffect } from "react";
import Stepper from "bs-stepper";
import { DateSelector, CustomSelect } from "@components";
// import "bs-stepper/dist/css/bs-stepper.min.css";
import {
  postCandidateDetails,
  updateCandidateDetails,
  resumeUpload,
} from "@api/urls";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  full_name: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Invalid email format")
    .required("This field is required."),
  phone_number: Yup.string().required("This field is required."),
  // resume: Yup.mixed().required("This field is required."),
  qualification: Yup.string().required("This field is required."),
  field_of_study: Yup.string().required("This field is required."),
  age: Yup.number()
    .required("This field is required.")
    .min(18, "You must be 18 or older."),

  location: Yup.string().required("This field is required."),
  experience: Yup.string().required("This field is required."),
  gender: Yup.string().required("This field is required."),
  company_name: Yup.string().required("This field is required."),
  role: Yup.string().required("This field is required."),
  date_from: Yup.date()
    .required("Date From is required")
    .typeError("Please enter a valid date"),
  date_to: Yup.date()
    .required("Date To is required")
    .typeError("Please enter a valid date")
    .min(Yup.ref("date_from"), "Date To cannot be before Date From"),
  linkedin_link: Yup.string()
    .url("Invalid URL format")
    .required("This field is required."),
  job: Yup.string().required("This field is required."),
});

function Index({ formData, action, uuid, formMeta, jobFormMeta }) {
  const stepperRef = useRef(null);
  const [stepperInstance, setStepperInstance] = useState(null);
  const [resumeFile, setResumeFile] = useState();
  const navigate = useNavigate();
  const [isView, setIsView] = useState(action === "view");

  useEffect(() => {
    if (stepperRef.current && !stepperInstance) {
      const stepper = new Stepper(stepperRef.current, {
        linear: false,
        animation: true,
      });
      setStepperInstance(stepper);
      if (isView) {
        setTimeout(() => {
          stepper.to(2);
        }, 0);
      }
    }
  }, [stepperRef, stepperInstance, isView]);

  const handleFormSubmit = async (values) => {
    try {
      if (resumeFile) {
        const resumeResponse = await resumeUpload({ file: resumeFile });
        // console.log("Response :", resumeResponse);

        values.resume = resumeResponse.data?.id;
        values.resumeURL = resumeResponse.data?.file;
      }

      // console.log("Form values:", values);

      if (uuid) {
        await updateCandidateDetails(uuid, values);
      } else {
        await postCandidateDetails(values);
      }

      setTimeout(() => {
        navigate("/candidate-list");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="col-12 mb-6">
      <div
        id="stepper"
        className="bs-stepper wizard-icons wizard-icons-example mt-2"
        ref={stepperRef}
      >
        <div className="bs-stepper-header">
          <div className="step" data-target="#account-details">
            <button type="button" className="step-trigger" disabled={isView}>
              <span className="bs-stepper-icon">
                <img
                  src="/assets/img/svg/form-wizard-account.svg"
                  alt="Account Details"
                />
              </span>
              <span className="bs-stepper-label">Account Details</span>
            </button>
          </div>
          <div className="line">
            <i className="ti ti-chevron-right" />
          </div>
          <div className="step" data-target="#review-submit">
            <button type="button" className="step-trigger">
              <span className="bs-stepper-icon">
                <img
                  src="/assets/img/svg/form-wizard-submit.svg"
                  alt="Review & Submit"
                />
              </span>
              <span className="bs-stepper-label">Review &amp; Submit</span>
            </button>
          </div>
        </div>
        <div className="bs-stepper-content">
          <Formik
            initialValues={{ ...formData }}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={handleFormSubmit}
          >
            {({ values, isSubmitting, validateForm, setTouched }) => (
              <Form>
                {/* Account Details */}
                <div id="account-details" className="content">
                  <div className="content-header mb-4">
                    <h6 className="mb-0">Candidate Details</h6>
                    <small>Enter Your Details.</small>
                  </div>
                  <div className="row g-6">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="full_name">
                        Full Name
                      </label>
                      <Field
                        type="text"
                        id="full_name"
                        name="full_name"
                        className="form-control"
                        placeholder="John Doe"
                      />
                      <ErrorMessage
                        name="full_name"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="john.doe@email.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="phone_number">
                        Phone Number
                      </label>
                      <Field
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        placeholder="987-654-3210"
                        pattern="^\d{10}$"
                        maxLength="10"
                      />
                      <ErrorMessage
                        name="phone_number"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="resume">
                        Resume (*.pdf, *.doc, *.docx, *.txt, *.rtf)
                      </label>
                      {values.resume ? (
                        <div>
                          <a
                            href={values.resume_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="ti ti-file-info ti-md"></i>
                            Resume
                          </a>
                        </div>
                      ) : (
                        <input
                          id="resume"
                          name="resume"
                          type="file"
                          className="form-control"
                          accept=".pdf, .doc, .docx, .txt, .rtf"
                          onChange={(event) =>
                            setResumeFile(event.currentTarget.files[0] || null)
                          }
                        />
                      )}
                      <ErrorMessage
                        name="resume"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Add other fields */}
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="qualification">
                        Qualification
                      </label>
                      <CustomSelect
                        name="qualification"
                        dropDownOptions={
                          jobFormMeta?.filter_data?.qualification
                        }
                      />
                      <ErrorMessage
                        name="qualification"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="field_of_study">
                        Field of Study
                      </label>
                      <Field
                        type="text"
                        id="field_of_study"
                        name="field_of_study"
                        className="form-control"
                        placeholder="Field of Study"
                      />
                      <ErrorMessage
                        name="field_of_study"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="age">
                        Age
                      </label>
                      <Field
                        type="number"
                        id="age"
                        name="age"
                        className="form-control"
                        placeholder="Age"
                        min="18"
                      />
                      <ErrorMessage
                        name="age"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="location">
                        Location
                      </label>
                      <Field
                        type="text"
                        id="location"
                        name="location"
                        className="form-control"
                        placeholder="Location"
                      />
                      <ErrorMessage
                        name="location"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="experience">
                        Experience
                      </label>
                      <CustomSelect
                        name="experience"
                        dropDownOptions={jobFormMeta?.filter_data?.experience}
                      />
                      <ErrorMessage
                        name="experience"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="gender">
                        Gender
                      </label>
                      <CustomSelect
                        name="gender"
                        dropDownOptions={
                          jobFormMeta?.filter_data?.prefered_gender
                        }
                      />
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="company_name">
                        Company Name
                      </label>
                      <Field
                        type="text"
                        id="company_name"
                        name="company_name"
                        className="form-control"
                        placeholder="Company Name"
                      />
                      <ErrorMessage
                        name="company_name"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="role">
                        Role
                      </label>
                      <Field
                        type="text"
                        id="role"
                        name="role"
                        className="form-control"
                        placeholder="Role"
                      />
                      <ErrorMessage
                        name="role"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="date_from">
                        Date From
                      </label>
                      <DateSelector
                        name="date_from"
                        onChange={(value) => setFieldValue("date_from", value)}
                      />
                      <ErrorMessage
                        name="date_from"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="date_to">
                        Date To
                      </label>
                      <DateSelector
                        name="date_to"
                        onChange={(value) => setFieldValue("date_to", value)}
                      />
                      <ErrorMessage
                        name="date_to"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="linkedin_link">
                        LinkedIn Profile
                      </label>
                      <Field
                        type="url"
                        id="linkedin_link"
                        name="linkedin_link"
                        className="form-control"
                        placeholder="https://linkedin.com/in/username"
                      />
                      <ErrorMessage
                        name="linkedin_link"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="job">
                        Job
                      </label>

                      <CustomSelect
                        name="job"
                        dropDownOptions={formMeta?.filter_data?.job}
                      />

                      <ErrorMessage
                        name="job"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-12 d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-label-secondary btn-prev"
                        onClick={() => stepperInstance?.previous()}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-next"
                        onClick={async () => {
                          // Trigger validation for all fields
                          const errors = await validateForm();

                          // Check if there are any validation errors
                          if (Object.keys(errors).length === 0) {
                            // Move to the next step if no errors
                            stepperInstance?.next();
                          } else {
                            // Set touched for all fields so error messages show up
                            setTouched({
                              full_name: true,
                              email: true,
                              phone_number: true,
                              resume: true,
                              qualification: true,
                              field_of_study: true,
                              age: true,
                              location: true,
                              experience: true,
                              gender: true,
                              company_name: true,
                              role: true,
                              date_from: true,
                              date_to: true,
                              linkedin_link: true,
                              job: true,
                            });
                          }
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                {/* Review & Submit */}
                <div id="review-submit" className="content">
                  {/* Display review data */}
                  <p className="fw-medium mb-2">Account</p>
                  <ul className="list-unstyled">
                    <li>Full Name: {values.full_name}</li>
                    <li>Email: {values.email}</li>
                    <li>Phone Number: {values.phone_number}</li>
                  </ul>
                  <hr />
                  <p className="fw-medium mb-2">Personal Info</p>
                  <ul className="list-unstyled">
                    <li>Age: {values.age}</li>
                    <li>Gender: {values.gender}</li>
                    <li>Location: {values.location}</li>
                    <li>Experience: {values.experience}</li>
                  </ul>
                  <hr />
                  <p className="fw-medium mb-2">Education</p>
                  <ul className="list-unstyled">
                    <li>Qualification: {values.qualification}</li>
                    <li>Field of Study: {values.field_of_study}</li>
                  </ul>
                  <hr />
                  <p className="fw-medium mb-2">Work Experience</p>
                  <ul className="list-unstyled">
                    <li>
                      Job:{" "}
                      {formMeta &&
                        formMeta?.filter_data?.job.find(
                          (item) => item.id == values.job
                        )?.identity}
                    </li>
                    <li>Company Name: {values.company_name}</li>
                    <li>Role: {values.role}</li>
                    <li>Date From: {values.date_from}</li>
                    <li>Date To: {values.date_to}</li>
                  </ul>
                  <hr />
                  <p className="fw-medium mb-2">Social Links</p>
                  <ul className="list-unstyled">
                    <li>
                      Resume:{" "}
                      {values.resume_url || resumeFile?.name ? (
                        <Link
                          to={values.resume_url || resumeFile?.name}
                          title={values.resume_url || resumeFile?.name}
                        >
                          Resume Link <i className="ti ti-link"></i>
                        </Link>
                      ) : (
                        "No Resume Link added"
                      )}
                    </li>
                    <li>
                      LinkedIn:{" "}
                      {values.linkedin_link ? (
                        <Link
                          to={values.linkedin_link}
                          title={values.linkedin_link}
                        >
                          LinkedIn Link <i className="ti ti-link"></i>
                        </Link>
                      ) : (
                        "No Linkedin Link added"
                      )}
                    </li>
                  </ul>
                  <hr />
                  {!isView && (
                    <div className="col-12 d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-label-secondary btn-prev"
                        onClick={() => stepperInstance?.previous()}
                        disabled={isView}
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success btn-submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Index;
