import React, { useState, useRef, useEffect } from "react";
import Stepper from "bs-stepper";
import { useAppContext } from "@context/AppContext";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be at most 15 characters")
    .required("Username is required"),
});

export default function Form() {
  const stepperRef = useRef(null);
  const [stepperInstance, setStepperInstance] = useState(null);
  const { setBreadcrumbs } = useAppContext();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };

  useEffect(() => {
    setBreadcrumbs({
      title: "Booking From",
      sidebarActiveId: 11,
      list: [
        {
          label: "Booking List",
          path: "/booking/list",
        },
        {
          label: "Booking From",
        },
      ],
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    if (stepperRef.current && !stepperInstance) {
      const stepper = new Stepper(stepperRef.current, {
        linear: false,
        animation: true,
      });
      setStepperInstance(stepper);
    }
  }, [stepperRef, stepperInstance]);

  const handleNextButton = () => {
    stepperInstance?.next();
  };

  const handlePreviousButton = () => {
    stepperInstance?.previous();
  };

  const handleSubmitForm = () => {
    console.log("Form submitted", formData);
  };

  return (
    <div className="card mb-6" style={{ padding: "20px 40px" }}>
      <div className="card-body">
        <div
          id="stepper"
          className="bs-stepper wizard-numbered mt-2"
          ref={stepperRef}
        >
          <div
            className="bs-stepper-header"
            style={{ borderBottom: "1px dotted" }}
          >
            <div className="step" data-target="#customer-details">
              <button
                type="button"
                className="step-trigger"
                aria-selected="false"
              >
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">
                  <span className="bs-stepper-title">Customer Details</span>
                  <span className="bs-stepper-subtitle">
                    Add Customer Details
                  </span>
                </span>
              </button>
            </div>
            <div className="line">
              <i className="ti ti-chevron-right" />
            </div>
            <div className="step" data-target="#booking-details">
              <button
                type="button"
                className="step-trigger"
                aria-selected="false"
              >
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">
                  <span className="bs-stepper-title">Booking Details</span>
                  <span className="bs-stepper-subtitle">
                    Add Booking Details
                  </span>
                </span>
              </button>
            </div>
            <div className="line">
              <i className="ti ti-chevron-right" />
            </div>
            <div className="step" data-target="#payment-details">
              <button
                type="button"
                className="step-trigger"
                aria-selected="false"
              >
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">
                  <span className="bs-stepper-title">Payment Details</span>
                  <span className="bs-stepper-subtitle">
                    Add Payment Details
                  </span>
                </span>
              </button>
            </div>
            <div className="line">
              <i className="ti ti-chevron-right" />
            </div>
            <div className="step" data-target="#preview-details">
              <button
                type="button"
                className="step-trigger"
                aria-selected="false"
              >
                <span className="bs-stepper-circle">4</span>
                <span className="bs-stepper-label">
                  <span className="bs-stepper-title">Preview</span>
                  <span className="bs-stepper-subtitle">Sample invoice</span>
                </span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            <div id="customer-details" className="content">
              <div className="row g-6">
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="johndoe"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <div className="text-danger">{errors.username}</div>
                  )}
                </div>

                <div className="col-12 d-flex justify-content-end">
                  <button
                    className="btn btn-primary btn-next waves-effect waves-light"
                    onClick={handleNextButton}
                  >
                    <span className="align-middle d-sm-inline-block d-none me-sm-2">
                      Next
                    </span>
                    <i className="ti ti-arrow-right ti-xs" />
                  </button>
                </div>
              </div>
            </div>

            <div id="booking-details" className="content">
              <div className="row g-6">
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="form-control"
                    placeholder="John"
                  />
                </div>

                <div className="col-12 d-flex justify-content-between">
                  <button
                    className="btn btn-label-secondary btn-prev waves-effect"
                    onClick={handlePreviousButton}
                  >
                    <i className="ti ti-arrow-left ti-xs me-sm-2 me-0" />
                    <span className="align-middle d-sm-inline-block d-none">
                      Previous
                    </span>
                  </button>
                  <button
                    className="btn btn-primary btn-next waves-effect waves-light"
                    onClick={handleNextButton}
                  >
                    <span className="align-middle d-sm-inline-block d-none me-sm-2">
                      Next
                    </span>
                    <i className="ti ti-arrow-right ti-xs" />
                  </button>
                </div>
              </div>
            </div>

            <div id="payment-details" className="content">
              <div className="row g-6">
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="form-control"
                    placeholder="John"
                  />
                </div>

                <div className="col-12 d-flex justify-content-between">
                  <button
                    className="btn btn-label-secondary btn-prev waves-effect"
                    onClick={handlePreviousButton}
                  >
                    <i className="ti ti-arrow-left ti-xs me-sm-2 me-0" />
                    <span className="align-middle d-sm-inline-block d-none">
                      Previous
                    </span>
                  </button>
                  <button
                    className="btn btn-primary btn-next waves-effect waves-light"
                    onClick={handleNextButton}
                  >
                    <span className="align-middle d-sm-inline-block d-none me-sm-2">
                      Next
                    </span>
                    <i className="ti ti-arrow-right ti-xs" />
                  </button>
                </div>
              </div>
            </div>

            <div id="preview-details" className="content">
              <div className="row g-6">
                <div className="col-12 mb-md-0 mb-6">
                  <div className="card invoice-preview-card p-sm-12 p-6">
                    <div
                      className="card-body invoice-preview-header rounded"
                      style={{ backgroundColor: "rgba(47, 43, 61, 0.06)" }}
                    >
                      <div className="d-flex justify-content-between flex-xl-row flex-md-column flex-sm-row flex-column">
                        <div className="mb-xl-0 mb-6 text-heading">
                          <div className="d-flex svg-illustration mb-6 gap-2 align-items-center">
                            <div className="app-brand-logo demo">
                              <svg
                                width={32}
                                height={22}
                                viewBox="0 0 32 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                                  fill="#7367F0"
                                />
                                <path
                                  opacity="0.06"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                                  fill="#161616"
                                />
                                <path
                                  opacity="0.06"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                                  fill="#161616"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                                  fill="#7367F0"
                                />
                              </svg>
                            </div>
                            <span className="app-brand-text fw-bold fs-4 ms-50">
                              Vuexy
                            </span>
                          </div>
                          <p className="mb-2">
                            Office 149, 450 South Brand Brooklyn
                          </p>
                          <p className="mb-2">
                            San Diego County, CA 91905, USA
                          </p>
                          <p className="mb-0">
                            +1 (123) 456 7891, +44 (876) 543 2198
                          </p>
                        </div>
                        <div>
                          <h5 className="mb-6">Invoice #86423</h5>
                          <div className="mb-1 text-heading">
                            <span>Date Issues:</span>
                            <span>April 25, 2021</span>
                          </div>
                          <div className="text-heading">
                            <span>Date Due:</span>
                            <span>May 25, 2021</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="row">
                        <div className="col-xl-6 col-md-12 col-sm-5 col-12 mb-xl-0 mb-md-6 mb-sm-0 mb-6">
                          <h6>Invoice To:</h6>
                          <p className="mb-1">Thomas shelby</p>
                          <p className="mb-1">Shelby Company Limited</p>
                          <p className="mb-1">Small Heath, B10 0HF, UK</p>
                          <p className="mb-1">718-986-6062</p>
                          <p className="mb-0">peakyFBlinders@gmail.com</p>
                        </div>
                        <div className="col-xl-6 col-md-12 col-sm-7 col-12">
                          <h6>Bill To:</h6>
                          <table>
                            <tbody>
                              <tr>
                                <td className="pe-4">Total Due:</td>
                                <td className="fw-medium">$12,110.55</td>
                              </tr>
                              <tr>
                                <td className="pe-4">Bank name:</td>
                                <td>American Bank</td>
                              </tr>
                              <tr>
                                <td className="pe-4">Country:</td>
                                <td>United States</td>
                              </tr>
                              <tr>
                                <td className="pe-4">IBAN:</td>
                                <td>ETD95476213874685</td>
                              </tr>
                              <tr>
                                <td className="pe-4">SWIFT code:</td>
                                <td>BR91905</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive border border-bottom-0 border-top-0 rounded">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Cost</th>
                            <th>Qty</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Vuexy Admin Template
                            </td>
                            <td className="text-nowrap">HTML Admin Template</td>
                            <td>$32</td>
                            <td>1</td>
                            <td>$32.00</td>
                          </tr>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Frest Admin Template
                            </td>
                            <td className="text-nowrap">
                              Angular Admin Template
                            </td>
                            <td>$22</td>
                            <td>1</td>
                            <td>$22.00</td>
                          </tr>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Apex Admin Template
                            </td>
                            <td className="text-nowrap">HTML Admin Template</td>
                            <td>$17</td>
                            <td>2</td>
                            <td>$34.00</td>
                          </tr>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Robust Admin Template
                            </td>
                            <td className="text-nowrap">
                              React Admin Template
                            </td>
                            <td>$66</td>
                            <td>1</td>
                            <td>$66.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive">
                      <table className="table m-0 table-borderless">
                        <tbody>
                          <tr>
                            <td className="align-top pe-6 ps-0 py-6">
                              <p className="mb-1">
                                <span className="me-2 h6">Salesperson:</span>
                                <span>Alfie Solomons</span>
                              </p>
                              <span>Thanks for your business</span>
                            </td>
                            <td className="px-0 py-6 w-px-100">
                              <p className="mb-2">Subtotal:</p>
                              <p className="mb-2">Discount:</p>
                              <p className="mb-2 border-bottom pb-2">Tax:</p>
                              <p className="mb-0 pt-2">Total:</p>
                            </td>
                            <td className="text-end px-0 py-6 w-px-100 fw-medium text-heading">
                              <p className="fw-medium mb-2">$1800</p>
                              <p className="fw-medium mb-2">$28</p>
                              <p className="fw-medium mb-2 border-bottom pb-2">
                                21%
                              </p>
                              <p className="fw-medium mb-0 pt-2">$1690</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <hr className="mt-0 mb-6" />
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-12">
                          <span className="fw-medium text-heading">Note:</span>
                          <span>
                            It was a pleasure working with you and your team. We
                            hope you will keep us in mind for future freelance
                            projects. Thank You!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 d-flex justify-content-between">
                  <button className="btn btn-label-secondary btn-prev waves-effect">
                    <i className="ti ti-arrow-left ti-xs me-sm-2 me-0" />
                    <span
                      className="align-middle d-sm-inline-block d-none"
                      onClick={handlePreviousButton}
                    >
                      Previous
                    </span>
                  </button>
                  <button
                    className="btn btn-success btn-submit waves-effect waves-light"
                    onClick={handleSubmitForm}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
