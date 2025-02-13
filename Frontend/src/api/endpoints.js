const EndPoints = {
  // Auth API
  loginURL: "/access/login/",
  logoutURL: "/access/logout/",
  registerURL: "/access/register/",
  refreshTokenURL: "/access/token/refresh/",
  userDetailsURL: "/access/user/details/",

  // Dashboard API
  dashboardDataURL: "/cms/dashboard/",

  // Staff API
  staffListURL: "/access/staff/list/",
  staffCudURL: "/access/staff/cud/",
  staffUpdateURL: "/access/staff/update/",
  staffDetailURL: "/access/staff/retrieve/",

  // Workshop API
  workshopListURL: "/cms/workshop/list/",
  workshopCudURL: "/cms/workshop/cud/",
  workshopDetailURL: "/cms/workshop/detail/",

  // Vehicle API
  vehicleListURL: "/cms/vehicle/list/",
  vehicleCudURL: "/cms/vehicle/cud/",
  vehicleDetail: "/cms/vehicle/detail/",

  // Driver API
  driverListURL: "/access/driver/list/",
  driverCudURL: "/access/driver/cud/",
  driverUpdateURL: "/access/driver/update/",
  driverDetailURL: "/access/driver/retrieve/",

  // OtherCabes Cabs API
  otherCabsListURL: "/cms/othercab/list/",
  otherCabsCudURL: "/cms/othercab/cud/",
  othercabsDetail: "/cms/othercab/detail/",

  // OtherCabes Vehicle API
  otherCabsVehicleListURL: "/cms/otherdriver/list/",
  otherCabsVehicleCudURL: "/cms/othervehicle/cud/",

  // OtherCabes Driver API
  otherCabsDriverListURL: "/cms/otherdriver/list/",
  otherCabsDriverCudURL: "/cms/otherdriver/cud/",

  //BankList API
  bankListURL: "/cms/bank/list/",
  bankCudURL: "/cms/bank/cud/",
  bankDetailURL: "/cms/bank/detail/",

  // Booking API
  bookingListURL: "/cms/booking/list/",
  bookingCudURL: "/cms/booking/cud/",

    // Customer API
    customerListURL: "/access/customer/list/",
    customerCudURL: "/access/customer/create/",
    customerUpdateURL: "/access/customer/update/",
    customerDetailURL: "/access/customer/retrieve/",
};

export default EndPoints;
