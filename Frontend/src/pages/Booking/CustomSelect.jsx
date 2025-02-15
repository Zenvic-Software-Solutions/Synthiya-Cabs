import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

export default function CustomSelect({
  fieldName,
  label,
  formData,
  errors,
  handleChange,
  apiFunction,
  optionKeys,
}) {
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiFunction();

      const mappedData = response.results.map((item) => ({
        label:
          optionKeys[2] && item?.[optionKeys[2]]
            ? `${item?.[optionKeys[1]]} (${item?.[optionKeys[2]]})`
            : item?.[optionKeys[1]] || "",

        value: item?.[optionKeys[0]] || "",
      }));

      setDropdownOptions(mappedData);
    };

    fetchData();
  }, []);

  const handleValueChange = (selectedOption) => {
    handleChange(fieldName, selectedOption?.value || "");
  };

  return (
    <>
      <label className="form-label" htmlFor={fieldName}>
        {label}
      </label>
      <CreatableSelect
        isClearable
        options={dropdownOptions}
        onChange={handleValueChange}
        value={
          dropdownOptions.find(
            (option) => option.value === formData[fieldName]
          ) || null
        }
        classNamePrefix="react-select"
      />
      {errors[fieldName] && (
        <div className="text-danger">{errors[fieldName]}</div>
      )}
    </>
  );
}
