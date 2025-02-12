import React from "react";
import ReactApexChart from "react-apexcharts";

export default function TripChart() {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
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
            type="bar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
}
