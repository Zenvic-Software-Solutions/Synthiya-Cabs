import React from "react";
import FinanceChart from "../Charts/FinanceChart";
import TripChart from "../Charts/TripChart";
const BootstrapAccordion = () => {
  return (
    <div className="row g-6">
      <div className="col-md">
        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading1">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion1"
                aria-expanded="false"
                aria-controls="accordion1"
              >
                Accordion Item 1
              </button>
            </h2>
            <div
              id="accordion1"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Accordion content for item 1.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion2"
                aria-expanded="false"
                aria-controls="accordion2"
              >
                Maintenance
              </button>
            </h2>
            <div
              id="accordion2"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Maintenance Details.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="heading3">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordion3"
                aria-expanded="false"
                aria-controls="accordion3"
              >
                Finance Details
              </button>
            </h2>
            <div
              id="accordion3"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
               <FinanceChart />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md">
        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header text-body d-flex justify-content-between" id="accordionIcon1">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordionIcon-1"
                aria-expanded="false"
                aria-controls="accordionIcon-1"
              >
                FC
              </button>
            </h2>
            <div
              id="accordionIcon-1"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionIcon"
            >
              <div className="accordion-body">
                FC content.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header text-body d-flex justify-content-between" id="accordionIcon2">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordionIcon-2"
                aria-expanded="false"
                aria-controls="accordionIcon-2"
              >
                Income & Expense
              </button>
            </h2>
            <div
              id="accordionIcon-2"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionIcon"
            >
              <div className="accordion-body">
              Income & Expense Details.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header text-body d-flex justify-content-between" id="accordionIcon3">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#accordionIcon-3"
                aria-expanded="false"
                aria-controls="accordionIcon-3"
              >
                Trip Chart
              </button>
            </h2>
            <div
              id="accordionIcon-3"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionIcon"
            >
              <div className="accordion-body">
               <TripChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapAccordion;
