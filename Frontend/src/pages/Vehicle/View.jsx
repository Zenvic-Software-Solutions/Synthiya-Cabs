import React from "react";

export default function View() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        {/* User Sidebar */}
        <div className="col-xl-4 col-lg-5 order-1 order-md-0">
          {/* User Card */}
          <div className="card mb-6">
            <div className="card-body pt-12">
              <div className="user-avatar-section">
                <div className=" d-flex align-items-center flex-column">
                  <img
                    className="img-fluid rounded mb-4"
                    src="../../assets/img/avatars/1.png"
                    height={120}
                    width={120}
                    alt="User avatar"
                  />
                  <div className="user-info text-center">
                    <h5>Violet Mendoza</h5>
                    <span className="badge bg-label-secondary">Author</span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-around flex-wrap my-6 gap-0 gap-md-3 gap-lg-4">
                <div className="d-flex align-items-center me-5 gap-4">
                  <div className="avatar">
                    <div className="avatar-initial bg-label-primary rounded">
                      <i className="ti ti-checkbox ti-lg" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-0">1.23k</h5>
                    <span>Task Done</span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <div className="avatar">
                    <div className="avatar-initial bg-label-primary rounded">
                      <i className="ti ti-briefcase ti-lg" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-0">568</h5>
                    <span>Project Done</span>
                  </div>
                </div>
              </div>
              <h5 className="pb-4 border-bottom mb-4">Details</h5>
              <div className="info-container">
                <ul className="list-unstyled mb-6">
                  <li className="mb-2">
                    <span className="h6">Username:</span>
                    <span>@violet.dev</span>
                  </li>
                  <li className="mb-2">
                    <span className="h6">Email:</span>
                    <span>vafgot@vultukir.org</span>
                  </li>
                  <li className="mb-2">
                    <span className="h6">Status:</span>
                    <span>Active</span>
                  </li>
                  <li className="mb-2">
                    <span className="h6">Role:</span>
                    <span>Author</span>
                  </li>
                  <li className="mb-2">
                    <span className="h6">Tax id:</span>
                    <span>Tax-8965</span>
                  </li>
                  <li className="mb-2">
                    <span className="h6">Contact:</span>
                    <span>(123) 456-7890</span>
                  </li>
                  <li className="mb-2">
                    <span className="h6">Languages:</span>
                    <span>French</span>
                  </li>
                  <li className="mb-2">
                    <span className="h6">Country:</span>
                    <span>England</span>
                  </li>
                </ul>
                <div className="d-flex justify-content-center">
                  <a
                    href="javascript:;"
                    className="btn btn-primary me-4 waves-effect waves-light"
                    data-bs-target="#editUser"
                    data-bs-toggle="modal"
                  >
                    Edit
                  </a>
                  <a
                    href="javascript:;"
                    className="btn btn-label-danger suspend-user waves-effect"
                  >
                    Suspend
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /User Card */}
          {/* Plan Card */}
          <div className="card mb-6 border border-2 border-primary rounded primary-shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <span className="badge bg-label-primary">Standard</span>
                <div className="d-flex justify-content-center">
                  <sub className="h5 pricing-currency mb-auto mt-1 text-primary">
                    $
                  </sub>
                  <h1 className="mb-0 text-primary">99</h1>
                  <sub className="h6 pricing-duration mt-auto mb-3 fw-normal">
                    month
                  </sub>
                </div>
              </div>
              <ul className="list-unstyled g-2 my-6">
                <li className="mb-2 d-flex align-items-center">
                  <i className="ti ti-circle-filled ti-10px text-secondary me-2" />
                  <span>10 Users</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="ti ti-circle-filled ti-10px text-secondary me-2" />
                  <span>Up to 10 GB storage</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="ti ti-circle-filled ti-10px text-secondary me-2" />
                  <span>Basic Support</span>
                </li>
              </ul>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="h6 mb-0">Days</span>
                <span className="h6 mb-0">26 of 30 Days</span>
              </div>
              <div
                className="progress mb-1 bg-label-primary"
                style={{ height: 6 }}
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <small>4 days remaining</small>
              <div className="d-grid w-100 mt-6">
                <button
                  className="btn btn-primary waves-effect waves-light"
                  data-bs-target="#upgradePlanModal"
                  data-bs-toggle="modal"
                >
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
          {/* /Plan Card */}
        </div>
        {/*/ User Sidebar */}
        {/* User Content */}
        <div className="col-xl-8 col-lg-7 order-0 order-md-1">
          {/* User Pills */}
          <div className="nav-align-top">
            <ul className="nav nav-pills flex-column flex-md-row flex-wrap mb-6 row-gap-2">
              <li className="nav-item">
                <a
                  className="nav-link active waves-effect waves-light"
                  href="javascript:void(0);"
                >
                  <i className="ti ti-user-check ti-sm me-1_5" />
                  Account
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link waves-effect waves-light"
                  href="app-user-view-security.html"
                >
                  <i className="ti ti-lock ti-sm me-1_5" />
                  Security
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link waves-effect waves-light"
                  href="app-user-view-billing.html"
                >
                  <i className="ti ti-bookmark ti-sm me-1_5" />
                  Billing &amp; Plans
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link waves-effect waves-light"
                  href="app-user-view-notifications.html"
                >
                  <i className="ti ti-bell ti-sm me-1_5" />
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link waves-effect waves-light"
                  href="app-user-view-connections.html"
                >
                  <i className="ti ti-link ti-sm me-1_5" />
                  Connections
                </a>
              </li>
            </ul>
          </div>
          {/*/ User Pills */}
          {/* Project table */}
          <div className="card mb-6">
            <div className="card-datatable table-responsive">
              <div
                id="DataTables_Table_1_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div className="card-header pb-0 pt-sm-0">
                  <div className="head-label text-center">
                    <h5 className="card-title mb-0">Project List</h5>
                  </div>
                  <div className="d-flex justify-content-center justify-content-md-end">
                    <div
                      id="DataTables_Table_1_filter"
                      className="dataTables_filter"
                    >
                      <label>
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search Project"
                          aria-controls="DataTables_Table_1"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <table
                  className="datatables-projects table border-top dataTable no-footer dtr-column collapsed"
                  id="DataTables_Table_1"
                  aria-describedby="DataTables_Table_1_info"
                  style={{ width: 913 }}
                >
                  <thead>
                    <tr>
                      <th
                        className="control sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 0 }}
                        aria-label=""
                      />
                      <th
                        className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 18 }}
                        data-col={1}
                        aria-label=""
                      >
                        <input type="checkbox" className="form-check-input" />
                      </th>
                      <th
                        className="sorting sorting_desc"
                        tabIndex={0}
                        aria-controls="DataTables_Table_1"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 195 }}
                        aria-label="Project: activate to sort column ascending"
                        aria-sort="descending"
                      >
                        Project
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_1"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 76 }}
                        aria-label="Leader: activate to sort column ascending"
                      >
                        Leader
                      </th>
                      <th
                        className="sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 109 }}
                        aria-label="Team"
                      >
                        Team
                      </th>
                      <th
                        className="w-px-200 sorting dtr-hidden"
                        tabIndex={0}
                        aria-controls="DataTables_Table_1"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 200, display: "none" }}
                        aria-label="Progress: activate to sort column ascending"
                      >
                        Progress
                      </th>
                      <th
                        className="sorting_disabled dtr-hidden"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 61, display: "none" }}
                        aria-label="Action"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td className="control" tabIndex={0} style={{}} />
                      <td className="  dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <span className="avatar-initial rounded-circle bg-label-danger">
                                WS
                              </span>
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-medium text-heading">
                              Website SEO
                            </span>
                            <small className="text-truncate">10 May 2021</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-heading">Eileen</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/10.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/3.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/2.png"
                                alt="Avatar"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span
                                className="avatar-initial rounded-circle pull-up text-heading"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="4 more"
                              >
                                +4
                              </span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "38%" }}
                              aria-valuenow="38%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-heading">38%</span>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots-vertical ti-md" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end m-0">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="control" tabIndex={0} style={{}} />
                      <td className="  dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../../assets/img/icons/brands/social-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-medium text-heading">
                              Social Banners
                            </span>
                            <small className="text-truncate">03 Jan 2021</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-heading">Owen</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/11.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/10.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/7.png"
                                alt="Avatar"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span
                                className="avatar-initial rounded-circle pull-up text-heading"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="2 more"
                              >
                                +2
                              </span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "45%" }}
                              aria-valuenow="45%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-heading">45%</span>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots-vertical ti-md" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end m-0">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className="control" tabIndex={0} style={{}} />
                      <td className="  dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../../assets/img/icons/brands/sketch-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-medium text-heading">
                              Logo Designs
                            </span>
                            <small className="text-truncate">12 Aug 2021</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-heading">Keith</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/5.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/7.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/12.png"
                                alt="Avatar"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span
                                className="avatar-initial rounded-circle pull-up text-heading"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="1 more"
                              >
                                +1
                              </span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "92%" }}
                              aria-valuenow="92%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-heading">92%</span>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots-vertical ti-md" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end m-0">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="control" tabIndex={0} style={{}} />
                      <td className="  dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../../assets/img/icons/brands/sketch-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-medium text-heading">
                              IOS App Design
                            </span>
                            <small className="text-truncate">19 Apr 2021</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-heading">Merline</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/2.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/8.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/5.png"
                                alt="Avatar"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span
                                className="avatar-initial rounded-circle pull-up text-heading"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="1 more"
                              >
                                +1
                              </span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "56%" }}
                              aria-valuenow="56%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-heading">56%</span>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots-vertical ti-md" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end m-0">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className="control" tabIndex={0} style={{}} />
                      <td className="  dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../../assets/img/icons/brands/figma-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-medium text-heading">
                              Figma Dashboards
                            </span>
                            <small className="text-truncate">08 Apr 2021</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-heading">Harmonia</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/9.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/2.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/4.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "25%" }}
                              aria-valuenow="25%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-heading">25%</span>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots-vertical ti-md" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end m-0">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="control" tabIndex={0} style={{}} />
                      <td className="  dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../../assets/img/icons/brands/html-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-medium text-heading">
                              Crypto Admin
                            </span>
                            <small className="text-truncate">
                              29 Sept 2021
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-heading">Allyson</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/7.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/3.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/7.png"
                                alt="Avatar"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span
                                className="avatar-initial rounded-circle pull-up text-heading"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="1 more"
                              >
                                +1
                              </span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "36%" }}
                              aria-valuenow="36%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-heading">36%</span>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots-vertical ti-md" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end m-0">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className="control" tabIndex={0} style={{}} />
                      <td className="  dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src="../../assets/img/icons/brands/react-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-medium text-heading">
                              Create Website
                            </span>
                            <small className="text-truncate">20 Mar 2021</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-heading">Georgie</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/2.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/6.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/5.png"
                                alt="Avatar"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span
                                className="avatar-initial rounded-circle pull-up text-heading"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="3 more"
                              >
                                +3
                              </span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "72%" }}
                              aria-valuenow="72%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-heading">72%</span>
                        </div>
                      </td>
                      <td className="dtr-hidden" style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots-vertical ti-md" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end m-0">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row mx-2">
                  <div className="col-sm-12 col-md-6">
                    <div
                      className="dataTables_info"
                      id="DataTables_Table_1_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 7 of 10 entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_1_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="DataTables_Table_1_previous"
                        >
                          <a
                            aria-controls="DataTables_Table_1"
                            aria-disabled="true"
                            role="link"
                            data-dt-idx="previous"
                            tabIndex={-1}
                            className="page-link"
                          >
                            <i className="ti ti-chevron-left ti-sm" />
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_1"
                            role="link"
                            aria-current="page"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_1"
                            role="link"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="DataTables_Table_1_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_1"
                            role="link"
                            data-dt-idx="next"
                            tabIndex={0}
                            className="page-link"
                          >
                            <i className="ti ti-chevron-right ti-sm" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div style={{ width: "1%" }} />
              </div>
            </div>
          </div>
          {/* /Project table */}
          {/* Activity Timeline */}
          <div className="card mb-6">
            <h5 className="card-header">User Activity Timeline</h5>
            <div className="card-body pt-1">
              <ul className="timeline mb-0">
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-primary" />
                  <div className="timeline-event">
                    <div className="timeline-header mb-3">
                      <h6 className="mb-0">12 Invoices have been paid</h6>
                      <small className="text-muted">12 min ago</small>
                    </div>
                    <p className="mb-2">
                      Invoices have been paid to the company
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <div className="badge bg-lighter rounded d-flex align-items-center">
                        <img
                          src="../../assets//img/icons/misc/pdf.png"
                          alt="img"
                          width={15}
                          className="me-2"
                        />
                        <span className="h6 mb-0 text-body">invoices.pdf</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-success" />
                  <div className="timeline-event">
                    <div className="timeline-header mb-3">
                      <h6 className="mb-0">Client Meeting</h6>
                      <small className="text-muted">45 min ago</small>
                    </div>
                    <p className="mb-2">Project meeting with john @10:15am</p>
                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                      <div className="d-flex flex-wrap align-items-center mb-50">
                        <div className="avatar avatar-sm me-2">
                          <img
                            src="../../assets/img/avatars/1.png"
                            alt="Avatar"
                            className="rounded-circle"
                          />
                        </div>
                        <div>
                          <p className="mb-0 small fw-medium">
                            Lester McCarthy (Client)
                          </p>
                          <small>CEO of Pixinvent</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-info" />
                  <div className="timeline-event">
                    <div className="timeline-header mb-3">
                      <h6 className="mb-0">Create a new project for client</h6>
                      <small className="text-muted">2 Day Ago</small>
                    </div>
                    <p className="mb-2">6 team members in a project</p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap border-top-0 p-0">
                        <div className="d-flex flex-wrap align-items-center">
                          <ul className="list-unstyled users-list d-flex align-items-center avatar-group m-0 me-2">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up"
                              aria-label="Vinnie Mostowy"
                              data-bs-original-title="Vinnie Mostowy"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/5.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up"
                              aria-label="Allen Rieske"
                              data-bs-original-title="Allen Rieske"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/12.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              className="avatar pull-up"
                              aria-label="Julee Rossignol"
                              data-bs-original-title="Julee Rossignol"
                            >
                              <img
                                className="rounded-circle"
                                src="../../assets/img/avatars/6.png"
                                alt="Avatar"
                              />
                            </li>
                            <li className="avatar">
                              <span
                                className="avatar-initial rounded-circle pull-up text-heading"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-original-title="3 more"
                              >
                                +3
                              </span>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* /Activity Timeline */}
          {/* Invoice table */}
          <div className="card mb-4">
            <div className="card-datatable table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div className="row mx-6">
                  <div className="col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-sm-start mt-6 mt-sm-0">
                    <div className="invoice-head-label">
                      <h5 className="card-title mb-0">Invoice List</h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 d-flex justify-content-center justify-content-md-end align-items-baseline">
                    <div className="dt-action-buttons d-flex justify-content-center flex-md-row align-items-baseline gap-2">
                      <div
                        className="dataTables_length"
                        id="DataTables_Table_0_length"
                      >
                        <label>
                          Show{" "}
                          <select
                            name="DataTables_Table_0_length"
                            aria-controls="DataTables_Table_0"
                            className="form-select"
                          >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>
                        </label>
                      </div>
                      <div className="dt-buttons btn-group flex-wrap">
                        <div className="btn-group">
                          <button
                            className="btn btn-secondary buttons-collection dropdown-toggle btn-label-secondary float-sm-end mb-3 mb-sm-0 waves-effect waves-light"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                          >
                            <span>
                              <i className="ti ti-upload ti-xs me-2" />
                              Export
                            </span>
                          </button>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  className="table datatable-invoice dataTable no-footer dtr-column"
                  id="DataTables_Table_0"
                  aria-describedby="DataTables_Table_0_info"
                  style={{ width: 912 }}
                >
                  <thead>
                    <tr>
                      <th
                        className="control sorting dtr-hidden"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 0, display: "none" }}
                        aria-label=": activate to sort column ascending"
                      />
                      <th
                        className="sorting sorting_desc"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 96 }}
                        aria-label="#: activate to sort column ascending"
                        aria-sort="descending"
                      >
                        #
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 113 }}
                        aria-label="Status: activate to sort column ascending"
                      >
                        Status
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 99 }}
                        aria-label="Total: activate to sort column ascending"
                      >
                        Total
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 172 }}
                        aria-label="Issued Date: activate to sort column ascending"
                      >
                        Issued Date
                      </th>
                      <th
                        className="sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 212 }}
                        aria-label="Actions"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#5089</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Sent<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 05/09/2020</span>'
                          data-bs-original-title='<span>Sent<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 05/09/2020</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-secondary w-px-30 h-px-30">
                            <i className="ti ti-circle-check ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$3077</td>
                      <td>05/02/2020</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#5041</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Sent<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 11/19/2020</span>'
                          data-bs-original-title='<span>Sent<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 11/19/2020</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-secondary w-px-30 h-px-30">
                            <i className="ti ti-circle-check ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$2230</td>
                      <td>02/01/2021</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#5027</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 09/25/2020</span>'
                          data-bs-original-title='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 09/25/2020</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-success w-px-30 h-px-30">
                            <i className="ti ti-circle-half-2 ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$2787</td>
                      <td>09/28/2020</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#5024</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> -$202<br> <span class="fw-medium">Due Date:</span> 08/02/2020</span>'
                          data-bs-original-title='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> -$202<br> <span class="fw-medium">Due Date:</span> 08/02/2020</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-success w-px-30 h-px-30">
                            <i className="ti ti-circle-half-2 ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$5285</td>
                      <td>06/30/2020</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#5020</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Downloaded<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 12/15/2020</span>'
                          data-bs-original-title='<span>Downloaded<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 12/15/2020</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-info w-px-30 h-px-30">
                            <i className="ti ti-arrow-down-circle ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$5219</td>
                      <td>07/17/2020</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#4995</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 06/09/2020</span>'
                          data-bs-original-title='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 06/09/2020</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-success w-px-30 h-px-30">
                            <i className="ti ti-circle-half-2 ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$3313</td>
                      <td>08/21/2020</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#4993</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 10/22/2020</span>'
                          data-bs-original-title='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 10/22/2020</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-success w-px-30 h-px-30">
                            <i className="ti ti-circle-half-2 ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$4836</td>
                      <td>07/10/2020</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#4989</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Past Due<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 08/01/2020</span>'
                          data-bs-original-title='<span>Past Due<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 08/01/2020</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-danger w-px-30 h-px-30">
                            <i className="ti ti-info-circle ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$5293</td>
                      <td>07/30/2020</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#4989</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Downloaded<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 09/23/2020</span>'
                          data-bs-original-title='<span>Downloaded<br> <span class="fw-medium">Balance:</span> 0<br> <span class="fw-medium">Due Date:</span> 09/23/2020</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-info w-px-30 h-px-30">
                            <i className="ti ti-arrow-down-circle ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$3623</td>
                      <td>12/01/2020</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td
                        className="  control"
                        tabIndex={0}
                        style={{ display: "none" }}
                      />
                      <td className="sorting_1">
                        <a href="app-invoice-preview.html">
                          <span>#4965</span>
                        </a>
                      </td>
                      <td>
                        <span
                          className="d-inline-block"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          aria-label='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> $666<br> <span class="fw-medium">Due Date:</span> 03/18/2021</span>'
                          data-bs-original-title='<span>Partial Payment<br> <span class="fw-medium">Balance:</span> $666<br> <span class="fw-medium">Due Date:</span> 03/18/2021</span>'
                        >
                          <span className="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-success w-px-30 h-px-30">
                            <i className="ti ti-circle-half-2 ti-xs" />
                          </span>
                        </span>
                      </td>
                      <td>$3789</td>
                      <td>09/27/2020</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:;"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-record"
                            data-bs-toggle="tooltip"
                            aria-label="Delete record"
                            data-bs-original-title="Delete record"
                          >
                            <i className="ti ti-trash ti-md" />
                          </a>
                          <a
                            href="app-invoice-preview.html"
                            className="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                            data-bs-toggle="tooltip"
                            aria-label="Preview"
                            data-bs-original-title="Preview"
                          >
                            <i className="ti ti-eye ti-md" />
                          </a>
                          <div className="d-inline-block">
                            <a
                              href="javascript:;"
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical ti-md" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end m-0">
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:;"
                                  className="dropdown-item"
                                >
                                  Archive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row mx-4">
                  <div className="col-sm-12 col-xxl-6 text-center text-xxl-start pb-md-2 pb-xxl-0">
                    <div
                      className="dataTables_info"
                      id="DataTables_Table_0_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 50 entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-xxl-6 d-md-flex justify-content-xxl-end justify-content-center">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_0_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="DataTables_Table_0_previous"
                        >
                          <a
                            aria-controls="DataTables_Table_0"
                            aria-disabled="true"
                            role="link"
                            data-dt-idx="previous"
                            tabIndex={-1}
                            className="page-link"
                          >
                            <i className="ti ti-chevron-left ti-sm" />
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            role="link"
                            aria-current="page"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            role="link"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            role="link"
                            data-dt-idx={2}
                            tabIndex={0}
                            className="page-link"
                          >
                            3
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            role="link"
                            data-dt-idx={3}
                            tabIndex={0}
                            className="page-link"
                          >
                            4
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            role="link"
                            data-dt-idx={4}
                            tabIndex={0}
                            className="page-link"
                          >
                            5
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="DataTables_Table_0_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            role="link"
                            data-dt-idx="next"
                            tabIndex={0}
                            className="page-link"
                          >
                            <i className="ti ti-chevron-right ti-sm" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Invoice table */}
        </div>
        {/*/ User Content */}
      </div>
      {/* Modal */}
      {/* Edit User Modal */}
      <div
        className="modal fade"
        id="editUser"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-simple modal-edit-user">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className="text-center mb-6">
                <h4 className="mb-2">Edit User Information</h4>
                <p>Updating user details will receive a privacy audit.</p>
              </div>
              <form
                id="editUserForm"
                className="row g-6 fv-plugins-bootstrap5 fv-plugins-framework"
                onsubmit="return false"
                noValidate="novalidate"
              >
                <div className="col-12 col-md-6 fv-plugins-icon-container">
                  <label
                    className="form-label"
                    htmlFor="modalEditUserFirstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="modalEditUserFirstName"
                    name="modalEditUserFirstName"
                    className="form-control"
                    placeholder="John"
                    defaultValue="John"
                  />
                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                </div>
                <div className="col-12 col-md-6 fv-plugins-icon-container">
                  <label className="form-label" htmlFor="modalEditUserLastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="modalEditUserLastName"
                    name="modalEditUserLastName"
                    className="form-control"
                    placeholder="Doe"
                    defaultValue="Doe"
                  />
                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                </div>
                <div className="col-12 fv-plugins-icon-container">
                  <label className="form-label" htmlFor="modalEditUserName">
                    Username
                  </label>
                  <input
                    type="text"
                    id="modalEditUserName"
                    name="modalEditUserName"
                    className="form-control"
                    placeholder="johndoe007"
                    defaultValue="johndoe007"
                  />
                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserEmail">
                    Email
                  </label>
                  <input
                    type="text"
                    id="modalEditUserEmail"
                    name="modalEditUserEmail"
                    className="form-control"
                    placeholder="example@domain.com"
                    defaultValue="example@domain.com"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserStatus">
                    Status
                  </label>
                  <div className="position-relative">
                    <select
                      id="modalEditUserStatus"
                      name="modalEditUserStatus"
                      className="select2 form-select select2-hidden-accessible"
                      aria-label="Default select example"
                      data-select2-id="modalEditUserStatus"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option selected="" data-select2-id={2}>
                        Status
                      </option>
                      <option value={1}>Active</option>
                      <option value={2}>Inactive</option>
                      <option value={3}>Suspended</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id={1}
                      style={{ width: "auto" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={0}
                          aria-disabled="false"
                          aria-labelledby="select2-modalEditUserStatus-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-modalEditUserStatus-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Status"
                          >
                            Status
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation" />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditTaxID">
                    Tax ID
                  </label>
                  <input
                    type="text"
                    id="modalEditTaxID"
                    name="modalEditTaxID"
                    className="form-control modal-edit-tax-id"
                    placeholder="123 456 7890"
                    defaultValue="123 456 7890"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserPhone">
                    Phone Number
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">US (+1)</span>
                    <input
                      type="text"
                      id="modalEditUserPhone"
                      name="modalEditUserPhone"
                      className="form-control phone-number-mask"
                      placeholder="202 555 0111"
                      defaultValue="202 555 0111"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserLanguage">
                    Language
                  </label>
                  <div className="position-relative">
                    <select
                      id="modalEditUserLanguage"
                      name="modalEditUserLanguage"
                      className="select2 form-select select2-hidden-accessible"
                      multiple=""
                      data-select2-id="modalEditUserLanguage"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="">Select</option>
                      <option value="english" selected="" data-select2-id={4}>
                        English
                      </option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                      <option value="dutch">Dutch</option>
                      <option value="hebrew">Hebrew</option>
                      <option value="sanskrit">Sanskrit</option>
                      <option value="hindi">Hindi</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id={3}
                      style={{ width: "auto" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={-1}
                          aria-disabled="false"
                        >
                          <ul className="select2-selection__rendered">
                            <li
                              className="select2-selection__choice"
                              title="English"
                              data-select2-id={5}
                            >
                              <span
                                className="select2-selection__choice__remove"
                                role="presentation"
                              >
                                ×
                              </span>
                              English
                            </li>
                            <li className="select2-search select2-search--inline">
                              <input
                                className="select2-search__field"
                                type="search"
                                tabIndex={0}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="none"
                                spellCheck="false"
                                role="searchbox"
                                aria-autocomplete="list"
                                placeholder=""
                                style={{ width: "0.75em" }}
                              />
                            </li>
                          </ul>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserCountry">
                    Country
                  </label>
                  <div className="position-relative">
                    <select
                      id="modalEditUserCountry"
                      name="modalEditUserCountry"
                      className="select2 form-select select2-hidden-accessible"
                      data-allow-clear="true"
                      data-select2-id="modalEditUserCountry"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="">Select</option>
                      <option value="Australia">Australia</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Canada">Canada</option>
                      <option value="China">China</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="India" selected="" data-select2-id={7}>
                        India
                      </option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Japan">Japan</option>
                      <option value="Korea">Korea, Republic of</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Russia">Russian Federation</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id={6}
                      style={{ width: "auto" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={0}
                          aria-disabled="false"
                          aria-labelledby="select2-modalEditUserCountry-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-modalEditUserCountry-container"
                            role="textbox"
                            aria-readonly="true"
                            title="India"
                          >
                            <span
                              className="select2-selection__clear"
                              title="Remove all items"
                              data-select2-id={8}
                            >
                              ×
                            </span>
                            India
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation" />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="editBillingAddress"
                    />
                    <label
                      htmlFor="editBillingAddress"
                      className="switch-label"
                    >
                      Use as a billing address?
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary me-3 waves-effect waves-light"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-label-secondary waves-effect"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                </div>
                <input type="hidden" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*/ Edit User Modal */}
      {/* Add New Credit Card Modal */}
      <div
        className="modal fade"
        id="upgradePlanModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
          <div className="modal-content">
            <div className="modal-body p-4">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className="text-center mb-6">
                <h4 className="mb-2">Upgrade Plan</h4>
                <p>Choose the best plan for user.</p>
              </div>
              <form
                id="upgradePlanForm"
                className="row g-4"
                onsubmit="return false"
              >
                <div className="col-sm-9">
                  <label className="form-label" htmlFor="choosePlan">
                    Choose Plan
                  </label>
                  <select
                    id="choosePlan"
                    name="choosePlan"
                    className="form-select"
                    aria-label="Choose Plan"
                  >
                    <option selected="">Choose Plan</option>
                    <option value="standard">Standard - $99/month</option>
                    <option value="exclusive">Exclusive - $249/month</option>
                    <option value="Enterprise">Enterprise - $499/month</option>
                  </select>
                </div>
                <div className="col-sm-3 d-flex align-items-end">
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Upgrade
                  </button>
                </div>
              </form>
            </div>
            <hr className="mx-4 my-2" />
            <div className="modal-body p-4">
              <p className="mb-0">User current plan is standard plan</p>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex justify-content-center me-2 mt-1">
                  <sup className="h6 pricing-currency pt-1 mt-2 mb-0 me-1 text-primary">
                    $
                  </sup>
                  <h1 className="mb-0 text-primary">99</h1>
                  <sub className="pricing-duration mt-auto mb-5 pb-1 small text-body">
                    /month
                  </sub>
                </div>
                <button className="btn btn-label-danger cancel-subscription waves-effect">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ Add New Credit Card Modal */}
      {/* /Modal */}
    </div>
  );
}
