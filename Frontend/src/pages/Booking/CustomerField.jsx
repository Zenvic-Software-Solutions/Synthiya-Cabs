import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

export default function CustomerField({
  fieldName,
  label,
  formData,
  setFormData,
  errors,
  handleChange,
  apiFunction,
}) {
  const phoneOptions = [
    { value: "9876543210", label: "9876543210" },
    { value: "8765432109", label: "8765432109" },
    { value: "7654321098", label: "7654321098" },
  ];
  const [dropdownOptions, setDropdownOptions] = useState();

  useEffect(() => {
    const FatchData = async () => {
      const response = await apiFunction();
      setDropdownOptions(response);
    };
    FatchData();
  }, []);

  const handlePhoneChange = (selectedOption) => {
    setFormData({
      ...formData,
      [fieldName[0]]: selectedOption ? selectedOption.value : "",
    });
  };

  return (
    <div className="row g-6" style={{ marginBottom: "40px" }}>
      <div className="col-sm-4">
        <label className="form-label" htmlFor={fieldName[0]}>
          {label[0]}
        </label>
        <CreatableSelect
          isClearable
          options={phoneOptions}
          onChange={handlePhoneChange}
          value={phoneOptions.find(
            (option) => option.value === formData[fieldName[0]]
          )}
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
          onChange={handleChange}
        />
        {errors[fieldName[1]] && (
          <div className="text-danger">{errors[fieldName[1]]}</div>
        )}
      </div>
    </div>
  );
}
