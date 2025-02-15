import React from "react";
import { DynamicTable } from "@components";
import { bookingTableMeta, bookingTableData } from "@api/urls";

export default function Index() {
  return (
    <div className="nav-align-top nav-tabs-shadow mb-6">
      {/* Navigation Tabs */}
      <ul className="nav nav-tabs nav-fill" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className="nav-link active waves-effect p-4"
            data-bs-toggle="tab"
            data-bs-target="#navs-justified-home"
            aria-controls="navs-justified-home"
            aria-selected="true"
          >
            <span className="d-none d-sm-flex">
              <i className="tf-icons ti ti-calendar ti-sm me-1" /> Booking
            </span>
            <i className="ti ti-calendar ti-sm d-sm-none" />
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className="nav-link waves-effect p-4"
            data-bs-toggle="tab"
            data-bs-target="#navs-justified-profile"
            aria-controls="navs-justified-profile"
            aria-selected="false"
          >
            <span className="d-none d-sm-flex">
              <i className="tf-icons ti ti-shopping-cart ti-sm me-1" /> Orders
            </span>
            <i className="ti ti-shopping-cart ti-sm d-sm-none" />
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className="nav-link waves-effect p-4"
            data-bs-toggle="tab"
            data-bs-target="#navs-justified-messages"
            aria-controls="navs-justified-messages"
            aria-selected="false"
          >
            <span className="d-none d-sm-flex">
              <i className="tf-icons ti ti-ban ti-sm me-1" /> Canceled
            </span>
            <i className="ti ti-ban ti-sm d-sm-none" />
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className="nav-link waves-effect p-4"
            data-bs-toggle="tab"
            data-bs-target="#navs-justified-profile"
            aria-controls="navs-justified-profile"
            aria-selected="false"
          >
            <span className="d-none d-sm-flex">
              <i className="tf-icons ti ti-check ti-sm me-1" /> Completed
            </span>
            <i className="ti ti-check ti-sm d-sm-none" />
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content p-0">
        {/* Booking Tab */}
        <div
          className="tab-pane fade show active"
          id="navs-justified-home"
          role="tabpanel"
        >
          <DynamicTable
            tableMetaApi={bookingTableMeta}
            tableDataApi={bookingTableData}
            actionLink={{
              viewLink: "/booking/view",
              editLink: "/booking/form",
              deleteLink: "#",
            }}
            breadcrumbData={{
              title: "Booking list",
              sidebarActiveId: 11,
              list: [{ label: "Booking list" }],
              addButtonData: {
                name: "Add Booking",
                link: "/booking/form",
              },
            }}
          />
        </div>

        {/* Orders Tab */}
        <div
          className="tab-pane fade"
          id="navs-justified-profile"
          role="tabpanel"
        >
          <DynamicTable
            tableMetaApi={bookingTableMeta}
            tableDataApi={bookingTableData}
            actionLink={{
              viewLink: "/booking/view",
              editLink: "/booking/form",
              deleteLink: "#",
            }}
            breadcrumbData={{
              title: "Booking list",
              sidebarActiveId: 11,
              list: [{ label: "Booking list" }],
              addButtonData: {
                name: "Add Booking",
                link: "/booking/form",
              },
            }}
          />
        </div>

        {/* Canceled Tab */}
        <div
          className="tab-pane fade"
          id="navs-justified-messages"
          role="tabpanel"
        >
          <DynamicTable
            tableMetaApi={bookingTableMeta}
            tableDataApi={bookingTableData}
            actionLink={{
              viewLink: "/booking/view",
              editLink: "/booking/form",
              deleteLink: "#",
            }}
            breadcrumbData={{
              title: "Booking list",
              sidebarActiveId: 11,
              list: [{ label: "Booking list" }],
              addButtonData: {
                name: "Add Booking",
                link: "/booking/form",
              },
            }}
          />
        </div>

        {/* Completed Tab */}
        <div
          className="tab-pane fade"
          id="navs-justified-messages"
          role="tabpanel"
        >
          <DynamicTable
            tableMetaApi={bookingTableMeta}
            tableDataApi={bookingTableData}
            actionLink={{
              viewLink: "/booking/view",
              editLink: "/booking/form",
              deleteLink: "#",
            }}
            breadcrumbData={{
              title: "Booking list",
              sidebarActiveId: 11,
              list: [{ label: "Booking list" }],
              addButtonData: {
                name: "Add Booking",
                link: "/booking/form",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
