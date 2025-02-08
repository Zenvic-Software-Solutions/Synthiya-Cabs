// urls.js
import EndPoints from "./endpoints";
import {
  makeGetRequest,
  makePostRequest,
  makeCustomRequest,
  makePatchRequest,
  makeDeleteRequest,
  makeFromRequest,
  makePutRequest,
} from "./methods/makeRequest";

// Auth API
export const login = (data) => makePostRequest(EndPoints.loginURL, data, false);
export const logout = () => makePostRequest(EndPoints.logoutURL);
export const register = (data) => makePostRequest(EndPoints.registerURL, data, false);
export const getUserDetails = () => makePostRequest(EndPoints.userDetailsURL);

// Pagination API
export const getPagination = (url) => makeGetRequest(url);

//Dashboard API
export const getDashboardData = () =>
  makeGetRequest(EndPoints.dashboardDataURL);

// Staff API
export const staffTableMeta = () => makeGetRequest(EndPoints.staffListURL + "table-meta/");
export const staffTableData = (data) => makeGetRequest(EndPoints.staffListURL, data);
export const getstaffCud = (uuid) => makeGetRequest(EndPoints.staffCudURL + uuid + "/meta/");
export const poststaffCud = (data) => makePostRequest(EndPoints.staffCudURL, data);
export const patchstaffCud = (uuid, data) => makePatchRequest(EndPoints.staffCudURL + uuid + "/", data);

// Vehicle API
export const vehicleTableMeta = () => makeGetRequest(EndPoints.vehicleListURL + "table-meta/");
export const vehicleTableData = (data) => makeGetRequest(EndPoints.vehicleListURL, data);
export const getVehicleCud = (uuid) => makeGetRequest(EndPoints.vehicleCudURL + uuid + "/meta/");
export const postVehicleCud = (data) => makePostRequest(EndPoints.vehicleCudURL, data);
export const patchVehicleCud = (uuid, data) => makePatchRequest(EndPoints.vehicleCudURL + uuid + "/", data);

// Driver API
export const driverTableMeta = () => makeGetRequest(EndPoints.driverListURL + "table-meta/");
export const driverTableData = (data) => makeGetRequest(EndPoints.driverListURL, data);
export const getDriverCud = (uuid) => makeGetRequest(EndPoints.driverCudURL + uuid + "/meta/");
export const postDriverCud = (data) => makePostRequest(EndPoints.driverCudURL, data);
export const patchDriverCud = (uuid, data) => makePatchRequest(EndPoints.driverCudURL + uuid + "/", data);