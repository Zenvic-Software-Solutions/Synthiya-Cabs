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
export const getStaffCud = (uuid) => makeGetRequest(EndPoints.staffCudURL + uuid + "/meta/");
export const postStaffCud = (data) => makePostRequest(EndPoints.staffCudURL, data);
export const patchStaffCud = (uuid, data) => makePatchRequest(EndPoints.staffCudURL + uuid + "/", data);

// Workshop API
export const workshopTableMeta = () => makeGetRequest(EndPoints.workshopListURL + "table-meta/");
export const workshopTableData = (data) => makeGetRequest(EndPoints.workshopListURL, data);
export const getWorkshopCud = (uuid) => makeGetRequest(EndPoints.workshopCudURL + uuid + "/meta/");
export const postWorkshopCud = (data) => makePostRequest(EndPoints.workshopCudURL, data);
export const patchWorkshopCud = (uuid, data) => makePatchRequest(EndPoints.workshopCudURL + uuid + "/", data);

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

// OtherCabs API
export const otherCabsTableMeta = () => makeGetRequest(EndPoints.otherCabsListURL + "table-meta/");
export const otherCabsTableData = (data) => makeGetRequest(EndPoints.otherCabsListURL, data);
export const getOtherCabsCud = (uuid) => makeGetRequest(EndPoints.otherCabsCudURL + uuid + "/meta/");
export const postOtherCabsCud = (data) => makePostRequest(EndPoints.otherCabsCudURL, data);
export const patchOtherCabsCud = (uuid, data) => makePatchRequest(EndPoints.otherCabsCudURL + uuid + "/", data);

// OtherCabs Vehicle API
export const otherCabsVehicleTableMeta = (uuid) => makeGetRequest(EndPoints.otherCabsVehicleListURL + uuid + "/" + "table-meta/");
export const otherCabsVehicleTableData = (uuid, data) => makeGetRequest(EndPoints.otherCabsVehicleListURL + uuid + "/", data);
export const getOtherCabsVehicleCud = (uuid) => makeGetRequest(EndPoints.otherCabsVehicleCudURL + uuid + "/meta/");
export const postOtherCabsVehicleCud = (data) => makePostRequest(EndPoints.otherCabsVehicleCudURL, data);
export const patchOtherCabsVehicleCud = (uuid, data) => makePatchRequest(EndPoints.otherCabsVehicleCudURL + uuid + "/", data);

// OtherCabs Driver API
export const otherCabsDriverTableMeta = (uuid) => makeGetRequest(EndPoints.otherCabsDriverListURL + uuid + "/" + "table-meta/");
export const otherCabsDriverTableData = (uuid, data) => makeGetRequest(EndPoints.otherCabsDriverListURL + uuid + "/", data);
export const getOtherCabsDriverCud = (uuid) => makeGetRequest(EndPoints.otherCabsDriverCudURL + uuid + "/meta/");
export const postOtherCabsDriverCud = (data) => makePostRequest(EndPoints.otherCabsDriverCudURL, data);
export const patchOtherCabsDriverCud = (uuid, data) => makePatchRequest(EndPoints.otherCabsDriverCudURL + uuid + "/", data);

//Bank API
export const bankTableMeta = () => makeGetRequest(EndPoints.bankListURL + "table-meta/");
export const bankTableData = (data) => makeGetRequest(EndPoints.bankListURL, data);
export const getBankCUD = (uuid) => makeGetRequest(EndPoints.bankCudURL + uuid + "/meta/");
export const postBankCUD = (data) => makePostRequest(EndPoints.bankCudURL, data);
export const patchBankCUD = (uuid, data) => makePatchRequest(EndPoints.bankCudURL + uuid + "/", data);
