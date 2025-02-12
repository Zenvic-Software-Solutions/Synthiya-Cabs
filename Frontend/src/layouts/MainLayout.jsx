import { Header, Sidebar, Breadcrumb, Loader } from "@components";
import { Outlet, Navigate } from "react-router-dom";

const MainLayout = () => {
  const authToken = localStorage.getItem("accessToken");

  const isAuthenticated = true || !!authToken;

  return !isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Header />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-12">
                  <Breadcrumb />
                </div>
                <div className="col-12">
                  <Outlet />
                </div>
              </div>
            </div>

            <div className="content-backdrop fade" />
          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle" />
      <div className="drag-target" />
    </div>
  );
};

export default MainLayout;
