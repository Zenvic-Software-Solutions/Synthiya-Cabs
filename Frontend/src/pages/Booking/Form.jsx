import React, { useState, useRef, useEffect } from "react";
import Stepper from "bs-stepper";
import { useAppContext } from "@context/AppContext";
import * as Yup from "yup";
import CustomerField from "./CustomerField";
import CustomSelect from "./CustomSelect";
import OtherCabField from "./OtherCabField";
import {
  vehicleTableData,
  driverTableData,
  otherCabsTableData,
  customerTableData,
  postCustomerCud,
  otherCabsDriverTableData,
  postOtherCabsDriverCud,
  otherCabsVehicleTableData,
  postOtherCabsVehicleCud,
} from "@api/urls";

const validationSchema = Yup.object().shape({
  // username: Yup.string()
  //   .min(3, "Username must be at least 3 characters")
  //   .max(15, "Username must be at most 15 characters")
  //   .required("Username is required"),
});

export default function Form() {
  const stepperRef = useRef(null);
  const [stepperInstance, setStepperInstance] = useState(null);
  const { setBreadcrumbs } = useAppContext();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
  });
  const [activeTab, setActiveTab] = useState("ourCab");

  const handleChange = async (eventOrName, value) => {
    let name, newValue;

    if (eventOrName && eventOrName.target) {
      ({ name, value: newValue } = eventOrName.target);
    } else {
      name = eventOrName;
      newValue = value;
    }

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));

    try {
      if (validationSchema.fields[name]) {
        await validationSchema.validateAt(name, { [name]: newValue });
      }
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

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
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
              <h5>Customer Details</h5>
              <div className="row g-6" style={{ marginBottom: "40px" }}>
                <CustomerField
                  fieldName={["customer_phone_number", "customer_name"]}
                  label={["Customer Phone number", "Customer Name"]}
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  handleChange={handleChange}
                  getApi={customerTableData}
                  postApi={postCustomerCud}
                />

                <h5>Sponser Details</h5>
                <CustomerField
                  fieldName={["sponser_phone_number", "sponser_name"]}
                  label={["Sponser Phone number", "Sponser Name"]}
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  handleChange={handleChange}
                  getApi={customerTableData}
                  postApi={postCustomerCud}
                />
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

            <div id="booking-details" className="content">
              <div className="row g-6">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="start_date">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="start_date"
                    className="form-control"
                    value={formData.start_date}
                    onChange={handleChange}
                  />
                  {errors.start_date && (
                    <div className="text-danger">{errors.start_date}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="end_date">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="end_date"
                    className="form-control"
                    value={formData.end_date}
                    onChange={handleChange}
                  />
                  {errors.end_date && (
                    <div className="text-danger">{errors.end_date}</div>
                  )}
                </div>
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="rent_type">
                    Rent Type
                  </label>
                  <select
                    name="rent_type"
                    className="form-control"
                    value={formData.rent_type}
                    onChange={handleChange}
                  >
                    <option value="daily">Daily</option>
                    <option value="hourly">Hourly</option>
                    <option value="weekly">Weekly</option>
                  </select>
                  {errors.rent_type && (
                    <div className="text-danger">{errors.rent_type}</div>
                  )}
                </div>
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="start_place">
                    Start Place
                  </label>
                  <input
                    type="text"
                    name="start_place"
                    className="form-control"
                    placeholder="Enter start place"
                    value={formData.start_place}
                    onChange={handleChange}
                  />
                  {errors.start_place && (
                    <div className="text-danger">{errors.start_place}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="end_place">
                    End Place
                  </label>
                  <input
                    type="text"
                    name="end_place"
                    className="form-control"
                    placeholder="Enter end place"
                    value={formData.end_place}
                    onChange={handleChange}
                  />
                  {errors.end_place && (
                    <div className="text-danger">{errors.end_place}</div>
                  )}
                </div>

                <div className="col-12">
                  <div className="nav-align-top nav-tabs-shadow mb-6">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          type="button"
                          className={`nav-link waves-effect ${
                            activeTab === "ourCab" ? "active show" : ""
                          }`}
                          role="tab"
                          onClick={() => handleTabChange("ourCab")}
                        >
                          Our Cab
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          type="button"
                          className={`nav-link waves-effect ${
                            activeTab === "otherCab" ? "active show" : ""
                          }`}
                          role="tab"
                          onClick={() => handleTabChange("otherCab")}
                        >
                          Other Cab
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className={`tab-pane fade ${
                          activeTab === "ourCab" ? "active show" : ""
                        }`}
                        role="tabpanel"
                      >
                        <div className="row g-6">
                          <div className="col-sm-4">
                            <CustomSelect
                              fieldName={"vehicle"}
                              label={" Vehicle"}
                              formData={formData}
                              errors={errors}
                              handleChange={handleChange}
                              apiFunction={vehicleTableData}
                              optionKeys={["uuid", "identity", "vehicle_no"]}
                            />
                          </div>

                          <div className="col-sm-4">
                            <CustomSelect
                              fieldName={"driver"}
                              label={" Driver"}
                              formData={formData}
                              errors={errors}
                              handleChange={handleChange}
                              apiFunction={driverTableData}
                              optionKeys={["uuid", "identity", "driver_id"]}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade ${
                          activeTab === "otherCab" ? "active show" : ""
                        }`}
                        role="tabpanel"
                      >
                        <div className="row g-6">
                          <div className="col-sm-4">
                            <CustomSelect
                              fieldName={"othercab"}
                              label={"Othercab Name"}
                              formData={formData}
                              errors={errors}
                              handleChange={handleChange}
                              apiFunction={otherCabsTableData}
                              optionKeys={["uuid", "identity"]}
                            />
                          </div>
                          <OtherCabField
                            fieldName={[
                              "otherdriver_phone_number",
                              "otherdriver_identity",
                            ]}
                            label={[
                              "OtherCab Driver Phone number",
                              "OtherCab Driver Name",
                            ]}
                            formData={formData}
                            setFormData={setFormData}
                            errors={errors}
                            handleChange={handleChange}
                            getApi={otherCabsDriverTableData}
                            postApi={postOtherCabsDriverCud}
                            OptionsList={[
                              {
                                value: "8765432109",
                                label: "8765432109",
                                name: "Driver 1",
                              },
                              {
                                value: "7654321098",
                                label: "7654321098",
                                name: "Driver 2",
                              },
                              {
                                value: "6543210987",
                                label: "6543210987",
                                name: " Driver 3",
                              },
                            ]}
                          />
                          <OtherCabField
                            fieldName={[
                              "othervechile_identity",
                              "othervechile_vehicle_no",
                            ]}
                            label={[
                              "OtherCab Vehicle Name",
                              "OtherCab Vehicle Number",
                            ]}
                            formData={formData}
                            setFormData={setFormData}
                            errors={errors}
                            handleChange={handleChange}
                            getApi={otherCabsVehicleTableData}
                            postApi={postOtherCabsVehicleCud}
                            OptionsList={[
                              {
                                value: "Vehicle 1",
                                name: "TN74AB0001",
                                label: "Vehicle 1",
                              },
                              {
                                value: "Vehicle 2",
                                name: "TN74AB0001",
                                label: "Vehicle 2",
                              },
                              {
                                value: "Vehicle 3",
                                name: "TN74AB0001",
                                label: "Vehicle 3",
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
              <h5>Payment 1 Details</h5>
              <div className="row g-6" style={{ marginBottom: "40px" }}>
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="payment_type">
                    Payment Type
                  </label>
                  <select
                    name="payment_type"
                    className="form-control"
                    value={formData.payment_type}
                    onChange={handleChange}
                  >
                    <option value="cash">Cash</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="debit_card">Debit Card</option>
                    <option value="bank_transfer">Bank Transfer</option>
                  </select>
                  {errors.payment_type && (
                    <div className="text-danger">{errors.payment_type}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="driver_betta">
                    Driver Betta
                  </label>
                  <input
                    type="number"
                    name="driver_betta"
                    className="form-control"
                    placeholder="Enter driver betta"
                    value={formData.driver_betta}
                    onChange={handleChange}
                  />
                  {errors.driver_betta && (
                    <div className="text-danger">{errors.driver_betta}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="halting_charge">
                    Halting Charge
                  </label>
                  <input
                    type="number"
                    name="halting_charge"
                    className="form-control"
                    placeholder="Enter halting charge"
                    value={formData.halting_charge}
                    onChange={handleChange}
                  />
                  {errors.halting_charge && (
                    <div className="text-danger">{errors.halting_charge}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="hills_charge">
                    Hills Charge
                  </label>
                  <input
                    type="number"
                    name="hills_charge"
                    className="form-control"
                    placeholder="Enter hills charge"
                    value={formData.hills_charge}
                    onChange={handleChange}
                  />
                  {errors.hills_charge && (
                    <div className="text-danger">{errors.hills_charge}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="permit">
                    Permit
                  </label>
                  <input
                    type="number"
                    name="permit"
                    className="form-control"
                    placeholder="Enter permit charge"
                    value={formData.permit}
                    onChange={handleChange}
                  />
                  {errors.permit && (
                    <div className="text-danger">{errors.permit}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="commission">
                    Commission
                  </label>
                  <input
                    type="number"
                    name="commission"
                    className="form-control"
                    placeholder="Enter commission"
                    value={formData.commission}
                    onChange={handleChange}
                  />
                  {errors.commission && (
                    <div className="text-danger">{errors.commission}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="gst">
                    GST (18%)
                  </label>
                  <input
                    type="number"
                    name="gst"
                    className="form-control"
                    placeholder="Enter GST amount"
                    value={formData.gst}
                    onChange={handleChange}
                  />
                  {errors.gst && (
                    <div className="text-danger">{errors.gst}</div>
                  )}
                </div>
              </div>
              <h5>Payment 2 Details</h5>
              <div className="row g-6" style={{ marginBottom: "40px" }}>
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="deduction">
                    Deduction
                  </label>
                  <input
                    type="number"
                    name="deduction"
                    className="form-control"
                    placeholder="Enter deduction"
                    value={formData.deduction}
                    onChange={handleChange}
                  />
                  {errors.deduction && (
                    <div className="text-danger">{errors.deduction}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="advance">
                    Advance
                  </label>
                  <input
                    type="number"
                    name="advance"
                    className="form-control"
                    placeholder="Enter advance amount"
                    value={formData.advance}
                    onChange={handleChange}
                  />
                  {errors.advance && (
                    <div className="text-danger">{errors.advance}</div>
                  )}
                </div>
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="paid_amount">
                    Paid Amount
                  </label>
                  <input
                    type="number"
                    name="paid_amount"
                    className="form-control"
                    placeholder="Enter paid amount"
                    value={formData.paid_amount}
                    onChange={handleChange}
                  />
                  {errors.paid_amount && (
                    <div className="text-danger">{errors.paid_amount}</div>
                  )}
                </div>

                <div className="col-sm-4">
                  <label className="form-label" htmlFor="total_amount">
                    Total Amount
                  </label>
                  <input
                    type="number"
                    name="total_amount"
                    className="form-control"
                    placeholder="Enter total amount"
                    value={formData.total_amount}
                    onChange={handleChange}
                  />
                  {errors.total_amount && (
                    <div className="text-danger">{errors.total_amount}</div>
                  )}
                  {/* <h6>{formData.total_amount}</h6> */}
                </div>
              </div>
              <h5>Other Details</h5>
              <div className="row g-6">
                <div className="col-12">
                  <label className="form-label" htmlFor="other_details">
                    Remark
                  </label>
                  <textarea
                    name="other_details"
                    className="form-control"
                    placeholder="Enter additional details"
                    value={formData.other_details}
                    onChange={handleChange}
                  ></textarea>
                  {errors.other_details && (
                    <div className="text-danger">{errors.other_details}</div>
                  )}
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
                                  fill="#c649ff"
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
                                  fill="#c649ff"
                                />
                              </svg>
                            </div>
                            <span className="app-brand-text fw-bold fs-4 ms-50">
                              Cab Booking
                            </span>
                          </div>
                          <p className="mb-2">Booking Service</p>
                          <p className="mb-2">
                            San Diego County, CA 91905, USA
                          </p>
                          <p className="mb-0">+1 (123) 456 7891</p>
                        </div>
                        <div>
                          <h5 className="mb-6">Invoice #CB86423</h5>
                          <div className="mb-1 text-heading">
                            <span>Date Booked:</span>
                            <span>2025-02-14</span>
                          </div>
                          <div className="text-heading">
                            <span>Date Due:</span>
                            <span>2025-02-16</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="row">
                        <div className="col-xl-6 col-md-12 col-sm-5 col-12 mb-xl-0 mb-md-6 mb-sm-0 mb-6">
                          <h6>Customer Details:</h6>
                          <p className="mb-1">Name: John Doe</p>
                          <p className="mb-1">Phone: 9876543210</p>
                          <p className="mb-1">Sponsor Name: Michael Smith</p>
                          <p className="mb-1">Sponsor Phone: 9123456789</p>
                        </div>
                        <div className="col-xl-6 col-md-12 col-sm-7 col-12">
                          <h6>Booking Details:</h6>
                          <table>
                            <tbody>
                              <tr>
                                <td className="pe-4">Start Date:</td>
                                <td className="fw-medium">2025-02-14</td>
                              </tr>
                              <tr>
                                <td className="pe-4">End Date:</td>
                                <td>2025-02-16</td>
                              </tr>
                              <tr>
                                <td className="pe-4">Start Place:</td>
                                <td>New York</td>
                              </tr>
                              <tr>
                                <td className="pe-4">End Place:</td>
                                <td>Los Angeles</td>
                              </tr>
                              <tr>
                                <td className="pe-4">Rent Type:</td>
                                <td>Daily</td>
                              </tr>
                              <tr>
                                <td className="pe-4">Payment Type:</td>
                                <td>Cash</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="row">
                        <div className="col-xl-6 col-md-12 col-sm-5 col-12 mb-xl-0 mb-md-6 mb-sm-0 mb-6">
                          <h6>Cab Details:</h6>
                          <p className="mb-1">Our Cab: Toyota Innova</p>
                          <p className="mb-1">Driver: James Anderson</p>
                          <p className="mb-1">Other Cab: Uber XL</p>
                          <p className="mb-1">Other Driver: Mark Wilson</p>
                          <p className="mb-1">
                            Other Vehicle Number: KA-05-6789
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive border border-bottom-0 border-top-0 rounded">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th>Item</th>

                            <th>Cost</th>

                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Cab Booking (Daily)
                            </td>

                            <td>₹200</td>

                            <td>₹400.00</td>
                          </tr>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Other Cab Booking
                            </td>

                            <td>₹150</td>

                            <td>₹150.00</td>
                          </tr>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Driver Betta
                            </td>

                            <td>₹500</td>

                            <td>₹500.00</td>
                          </tr>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Halting Charge
                            </td>

                            <td>₹200</td>

                            <td>₹200.00</td>
                          </tr>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Charge for hills route
                            </td>
                            <td>₹50</td>

                            <td>₹50.00</td>
                          </tr>
                          <tr>
                            <td className="text-nowrap text-heading">Permit</td>

                            <td>₹30</td>

                            <td>₹30.00</td>
                          </tr>
                          <tr>
                            <td className="text-nowrap text-heading">
                              Commission
                            </td>

                            <td>₹100</td>

                            <td>₹100.00</td>
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
                                <span className="me-2 h6">Total Due:</span>
                                <span>₹2500</span>
                              </p>
                              <span>Thanks for your booking!</span>
                            </td>
                            <td
                              className="px-0 py-6 w-px-100"
                              style={{ width: "110px !important" }}
                            >
                              <p className="mb-2">Subtotal:</p>
                              <p className="mb-2">GST (18%):</p>
                              <p className="mb-2">Payment Type:</p>
                              <p className="mb-2">Deduction:</p>
                              <p className="mb-2">Advance:</p>
                              <p className="mb-2">Paid Amount:</p>
                              <p className="mb-2 border-bottom pb-2">Total:</p>
                            </td>
                            <td className="text-end px-0 py-6 w-px-100 fw-medium text-heading">
                              <p className="fw-medium mb-2">₹2500</p>
                              <p className="fw-medium mb-2">₹450</p>
                              <p className="fw-medium mb-0 pt-2">₹3000</p>
                              <p className="fw-medium mb-2">₹450</p>
                              <p className="fw-medium mb-2">₹450</p>
                              <p className="fw-medium mb-2">₹450</p>
                              <p className="fw-medium mb-2">₹450</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <hr className="mt-0 mb-6" />
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-12">
                          <p className="fw-medium text-heading">Note:</p>
                          <p>Paid in full</p>
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
                  <div
                    className="d-flex justify-content-between"
                    style={{ width: "220px" }}
                  >
                    <button
                      className="btn btn-info btn-submit waves-effect waves-light"
                      onClick={handleSubmitForm}
                    >
                      Booking
                    </button>
                    <button
                      className="btn btn-success btn-submit waves-effect waves-light"
                      onClick={handleSubmitForm}
                      style={{ width: "100px" }}
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
