import React from "react";
import ReactApexChart from "react-apexcharts";

export default function FinanceChart() {
  const [state, setState] = React.useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <div>
          <h5 className="card-title mb-0">Finance</h5>
          <p className="card-subtitle my-0">Commercial networks</p>
        </div>
        <div className="dropdown">
          <button
            type="button"
            className="btn dropdown-toggle px-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ti ti-calendar" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a
                href="javascript:void(0);"
                className="dropdown-item d-flex align-items-center waves-effect"
              >
                Today
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="dropdown-item d-flex align-items-center waves-effect"
              >
                Yesterday
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="dropdown-item d-flex align-items-center waves-effect"
              >
                Last 7 Days
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="dropdown-item d-flex align-items-center waves-effect"
              >
                Last 30 Days
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="dropdown-item d-flex align-items-center waves-effect"
              >
                Current Month
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="dropdown-item d-flex align-items-center waves-effect"
              >
                Last Month
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body" style={{ position: "relative" }}>
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
}
