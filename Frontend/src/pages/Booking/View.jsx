import React, { useEffect } from "react";
import { useAppContext } from "@context/AppContext";

export default function View() {
  const { setBreadcrumbs } = useAppContext();
  useEffect(() => {
    setBreadcrumbs({
      title: "Booking View",
      sidebarActiveId: 11,
      list: [
        {
          label: "Booking List",
          path: "/booking/list",
        },
        {
          label: "Booking View",
        },
      ],
    });
  }, [setBreadcrumbs]);
  return (
    <div
      className="row invoice-preview"
      style={{ flexDirection: "column", gap: "20px" }}
    >
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
                <p className="mb-2">San Diego County, CA 91905, USA</p>
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
                <p className="mb-1">Other Vehicle Number: KA-05-6789</p>
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

                  <td>$200</td>

                  <td>$400.00</td>
                </tr>
                <tr>
                  <td className="text-nowrap text-heading">
                    Other Cab Booking
                  </td>

                  <td>$150</td>

                  <td>$150.00</td>
                </tr>
                <tr>
                  <td className="text-nowrap text-heading">Driver Betta</td>

                  <td>$500</td>

                  <td>$500.00</td>
                </tr>
                <tr>
                  <td className="text-nowrap text-heading">Halting Charge</td>

                  <td>$200</td>

                  <td>$200.00</td>
                </tr>
                <tr>
                  <td className="text-nowrap text-heading">
                    Charge for hills route
                  </td>
                  <td>$50</td>

                  <td>$50.00</td>
                </tr>
                <tr>
                  <td className="text-nowrap text-heading">Permit</td>

                  <td>$30</td>

                  <td>$30.00</td>
                </tr>
                <tr>
                  <td className="text-nowrap text-heading">Commission</td>

                  <td>$100</td>

                  <td>$100.00</td>
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
                      <span>$2500</span>
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
                    <p className="fw-medium mb-2">$2500</p>
                    <p className="fw-medium mb-2">$450</p>
                    <p className="fw-medium mb-0 pt-2">$3000</p>
                    <p className="fw-medium mb-2">$450</p>
                    <p className="fw-medium mb-2">$450</p>
                    <p className="fw-medium mb-2">$450</p>
                    <p className="fw-medium mb-2">$450</p>
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
      <div className="col-12 invoice-actions">
        <div className="card">
          <div className="card-body">
            <div className="d-flex" style={{ gap: "20px" }}>
              <button className="btn btn-primary d-grid w-100 waves-effect waves-light">
                <span className="d-flex align-items-center justify-content-center text-nowrap">
                  <i className="ti ti-download ti-xs me-2" />
                  Download
                </span>
              </button>

              <button className="btn btn-success d-grid w-100 waves-effect waves-light">
                <span className="d-flex align-items-center justify-content-center text-nowrap">
                  <i className="ti ti-printer ti-xs me-2" />
                  Print
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
