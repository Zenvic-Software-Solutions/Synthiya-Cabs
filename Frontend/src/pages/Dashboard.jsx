import React, { useEffect, useState } from "react";
import { getDashboardData } from "@api/urls";
import { Link } from "react-router-dom";
import { Loader, FinanceChart, TripChart } from "@components";
import { useAppContext } from "@context/AppContext";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    total_vehicles: 100,
    available_vehicles: 80,
    under_maintenance: 10,
    in_use: 10,
  });
  const { setBreadcrumbs } = useAppContext();
  useEffect(() => {
    setBreadcrumbs({
      title: "Dashboard",
      sidebarActiveId: 1,
    });
  }, [setBreadcrumbs]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDashboardData();

      setDashboardData(response);
    };
    // fetchData();
  }, []);

  function formatAmount(amount) {
    return `₹${(amount || 0).toLocaleString("en-IN")}`;
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {!dashboardData ? (
        <Loader />
      ) : (
        <>
          <div className="row g-6 mb-6">
            {/* Total Vehicles */}
            <div className="col-sm-6 col-xl-3">
              <div className="card card-border-shadow-primary">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="content-left">
                      <span className="text-heading">Total Vehicles</span>
                      <div className="d-flex align-items-center my-1">
                        <h4 className="mb-0 me-2">
                          {dashboardData.total_vehicles || 0}
                        </h4>
                      </div>
                      <small className="mb-0">Total number of vehicles</small>
                    </div>
                    <div className="avatar">
                      <Link to="/vehicles">
                        <span className="avatar-initial rounded bg-label-primary">
                          <i className="ti ti-car ti-26px" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Vehicles */}
            <div className="col-sm-6 col-xl-3">
              <div className="card card-border-shadow-success">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="content-left">
                      <span className="text-heading">Available Vehicles</span>
                      <div className="d-flex align-items-center my-1">
                        <h4 className="mb-0 me-2">
                          {dashboardData.available_vehicles || 0}
                        </h4>
                      </div>
                      <small className="mb-0">Vehicles available for use</small>
                    </div>
                    <div className="avatar">
                      <Link to="/available-vehicles">
                        <span className="avatar-initial rounded bg-label-success">
                          <i className="ti ti-check ti-26px" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicles Under Maintenance */}
            <div className="col-sm-6 col-xl-3">
              <div className="card card-border-shadow-warning">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="content-left">
                      <span className="text-heading">Under Maintenance</span>
                      <div className="d-flex align-items-center my-1">
                        <h4 className="mb-0 me-2">
                          {dashboardData.under_maintenance || 0}
                        </h4>
                      </div>
                      <small className="mb-0">
                        Vehicles currently under maintenance
                      </small>
                    </div>
                    <div className="avatar">
                      <Link to="/maintenance">
                        <span className="avatar-initial rounded bg-label-warning">
                          <i className="ti ti-tools ti-26px" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicles in Use */}
            <div className="col-sm-6 col-xl-3">
              <div className="card card-border-shadow-danger">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="content-left">
                      <span className="text-heading">Vehicles in Use</span>
                      <div className="d-flex align-items-center my-1">
                        <h4 className="mb-0 me-2">
                          {dashboardData.in_use || 0}
                        </h4>
                      </div>
                      <small className="mb-0">
                        Vehicles currently being used
                      </small>
                    </div>
                    <div className="avatar">
                      <Link to="/in-use">
                        <span className="avatar-initial rounded bg-label-danger">
                          <i className="ti ti-road ti-26px" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-6">
              <FinanceChart />
            </div>
            <div className="col-sm-6 col-xl-6">
              <TripChart />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
