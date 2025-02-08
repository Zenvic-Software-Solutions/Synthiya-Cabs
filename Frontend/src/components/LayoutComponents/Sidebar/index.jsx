import React, { useState } from "react";
import { Link } from "react-router-dom";
import APP_CONSTANTS from "@config/AppConstants";
import { useAppContext } from "@context/AppContext";
import "./style.css";

const Sidebar = () => {
  const [dropOpen, setDropOpen] = useState({});
  const { breadcrumbs } = useAppContext();

  const MenuList = [
    {
      id: 1,
      label: "Dashboard",
      icon: "ti ti-layout-dashboard",
      path: "/dashboard",
    },
    {
      id: 2,
      label: "Master",
      icon: "ti ti-database",
      subItems: [
        { id: 3, label: "Staff", icon: "ti ti-user", path: "/staff/list" },
        { id: 4, label: "Driver", icon: "ti ti-steering-wheel", path: "#" },
        { id: 5, label: "Other Cabs", icon: "ti ti-car", path: "#" },
        { id: 6, label: "Customer", icon: "ti ti-user-check", path: "#" },
        { id: 7, label: "Vehicle", icon: "ti ti-truck", path: "/vechile/list" },
        { id: 8, label: "Bank", icon: "ti ti-credit-card", path: "#" },
        { id: 9, label: "Workshop", icon: "ti ti-tools", path: "#" },
        { id: 10, label: "Ledger", icon: "ti ti-book", path: "#" },
      ],
    },
    {
      id: 11,
      label: "Booking",
      icon: "ti ti-calendar-check",
      path: "#",
    },
    {
      id: 12,
      label: "Maintenance",
      icon: "ti ti-settings",
      path: "#",
    },
    {
      id: 13,
      label: "Betta",
      icon: "ti ti-map",
      path: "#",
    },
    {
      id: 14,
      label: "Transactions",
      icon: "ti ti-wallet",
      subItems: [
        {
          id: 15,
          label: "Daily Transaction",
          icon: "ti ti-exchange",
          path: "#",
        },
        {
          id: 16,
          label: "Other Cabs Transaction",
          icon: "ti ti-taxi",
          path: "#",
        },
        {
          id: 17,
          label: "Maintenance Transaction",
          icon: "ti ti-wrench",
          path: "#",
        },
      ],
    },
    {
      id: 18,
      label: "Report",
      icon: "ti ti-file-invoice",
      path: "/report",
    },
  ];

  const toggleDropOpen = (index) => {
    setDropOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const setHtmlClass = (action, className) => {
    const htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.classList[action](className);

    const logoElement = document.getElementsByClassName("app-mini-logo")[0];
    if (logoElement) {
      logoElement.classList[action](className);
    }
  };

  const handleSideBar = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1199) {
      setHtmlClass("toggle", "layout-menu-expanded");
    } else {
      setHtmlClass("toggle", "layout-menu-collapsed");
    }
  };

  const handleMouseEnter = () => setHtmlClass("toggle", "layout-menu-hover");
  const handleMouseLeave = () => setHtmlClass("remove", "layout-menu-hover");

  const screenWidth = window.innerWidth;

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
      onMouseEnter={screenWidth > 1199 ? handleMouseEnter : null}
      onMouseLeave={screenWidth > 1199 ? handleMouseLeave : null}
    >
      <div className="app-brand demo" style={{ paddingTop: "15px" }}>
        <Link to="#" className="app-brand-link">
          <span className="d-none app-mini-logo">
            <img src={APP_CONSTANTS.Favicon} width={34} />
          </span>
          <span className="app-brand-text demo menu-text fw-bold">
            <img src={APP_CONSTANTS.App_Logo} width={150} />
          </span>
        </Link>
        <Link
          to="#"
          className="layout-menu-toggle menu-link text-large ms-auto"
          onClick={handleSideBar}
        >
          <i className="ti menu-toggle-icon d-none d-xl-block align-middle" />
          <i className="ti ti-x d-block d-xl-none ti-md align-middle" />
        </Link>
      </div>

      <div className="menu-inner-shadow" />
      <div className="menu-inner py-1 ps ps--active-y">
        {MenuList.map((menuItem) => {
          const isSubMenuActive = menuItem.subItems?.some(
            (subItem) => subItem.id === breadcrumbs.sidebarActiveId
          );

          const isOpen = dropOpen[menuItem.id] || isSubMenuActive;
          const isActive =
            menuItem.id === breadcrumbs.sidebarActiveId || isSubMenuActive;

          if (menuItem.subItems) {
            return (
              <li
                key={menuItem.id}
                className={`menu-item ${isOpen ? "open" : ""}`}
              >
                <Link
                  to="#"
                  className="menu-link menu-toggle"
                  onClick={() => toggleDropOpen(menuItem.id)}
                >
                  <i className={`menu-icon tf-icons ${menuItem.icon}`} />
                  <div data-i18n={menuItem.label}>{menuItem.label}</div>
                </Link>
                <ul className={`menu-sub ${isOpen ? "open" : ""}`}>
                  {menuItem.subItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      to={subItem.path}
                      className={`menu-item ${
                        subItem.id === breadcrumbs.sidebarActiveId
                          ? "active"
                          : ""
                      }`}
                    >
                      <div className="menu-link">
                        <div data-i18n={subItem.label}>{subItem.label}</div>
                      </div>
                    </Link>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li
                key={menuItem.id}
                className={`menu-item ${isActive ? "active" : ""}`}
              >
                <Link
                  to={menuItem.path}
                  className={`menu-link ${isActive ? "active" : ""}`}
                >
                  <i className={`menu-icon tf-icons ${menuItem.icon}`} />
                  <div data-i18n={menuItem.label}>{menuItem.label}</div>
                </Link>
              </li>
            );
          }
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
