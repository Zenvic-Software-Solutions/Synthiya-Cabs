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
                <p className="mb-2">Office 149, 450 South Brand Brooklyn</p>
                <p className="mb-2">San Diego County, CA 91905, USA</p>
                <p className="mb-0">+1 (123) 456 7891, +44 (876) 543 2198</p>
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
                  <td className="text-nowrap">Angular Admin Template</td>
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
                  <td className="text-nowrap">React Admin Template</td>
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
                    <p className="fw-medium mb-2 border-bottom pb-2">21%</p>
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
                  It was a pleasure working with you and your team. We hope you
                  will keep us in mind for future freelance projects. Thank You!
                </span>
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
