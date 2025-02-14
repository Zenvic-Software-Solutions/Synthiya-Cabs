import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

export default function OtherCabField({
  fieldName,
  label,
  formData,
  setFormData,
  errors,
  handleChange,
  getApi,
  postApi,
}) {
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    phone_number: "",
    identity: "",
  });
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApi(formData.othercab);
        const mappedData = response?.results?.map((item) => ({
          value: item.uuid,
          label:
            fieldName[1] == "othervechile_identity"
              ? item.other_cab_name_details?.phone_number
              : "Unkown",
          name: item.identity || "",
        }));

        console.log("API Response:", mappedData);
        setDropdownOptions(Array.isArray(mappedData) ? mappedData : []);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setDropdownOptions([]);
      }
    };

    if (formData?.othercab) fetchData();
  }, [formData?.othercab]);

  const handlePhoneChange = (selectedOption) => {
    setIsNewCustomer(false);
    setFormData({
      ...formData,
      [fieldName[0]]: selectedOption ? selectedOption.value : "",
      [fieldName[1]]: selectedOption ? selectedOption.name : "",
    });
  };

  const handleCreateOption = (inputValue) => {
    setIsNewCustomer(true);
    const newOption = { value: inputValue, label: inputValue };
    setNewCustomer({ phone_number: inputValue, identity: "" });

    setDropdownOptions((prevOptions) => [...prevOptions, newOption]);
    setFormData({
      ...formData,
      [fieldName[0]]: inputValue,
      [fieldName[1]]: "",
    });
  };

  const handleCreateNewCustomer = async () => {
    const response = await postApi(formData?.othercab, {
      identity: newCustomer.identity,
      phone_number: newCustomer.phone_number,
    });

    setIsNewCustomer(false);
  };

  return (
    <>
      <div className="col-sm-4">
        <label className="form-label" htmlFor={fieldName[0]}>
          {label[0]}
        </label>
        <CreatableSelect
          isClearable
          options={dropdownOptions}
          onChange={handlePhoneChange}
          onCreateOption={handleCreateOption}
          value={
            dropdownOptions.find(
              (option) => option.value === formData[fieldName[0]]
            ) || ""
          }
          classNamePrefix="react-select"
        />
        {errors[fieldName[0]] && (
          <div className="text-danger">{errors[fieldName[0]]}</div>
        )}
      </div>

      <div className="col-sm-4">
        <label className="form-label" htmlFor={fieldName[1]}>
          {label[1]}
        </label>
        <input
          type="text"
          name={fieldName[1]}
          className="form-control"
          placeholder={`Enter ${label[1]}`}
          value={formData[fieldName[1]] || ""}
          onChange={(e) => {
            setNewCustomer((prev) => ({ ...prev, identity: e.target.value }));
            handleChange(e);
          }}
        />
        {errors[fieldName[1]] && (
          <div className="text-danger">{errors[fieldName[1]]}</div>
        )}
      </div>

      {isNewCustomer && (
        <div className="col-sm-4 d-flex align-items-end">
          <button className="btn btn-primary" onClick={handleCreateNewCustomer}>
            Save New Customer
          </button>
        </div>
      )}
    </>
  );
}
