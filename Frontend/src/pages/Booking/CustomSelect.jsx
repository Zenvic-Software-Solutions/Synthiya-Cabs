import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

export default function CustomSelect({
  fieldName,
  label,
  formData,
  errors,
  handleChange,
  apiFunction,
  optionKeys = ["uuid", "identity"],
}) {
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof apiFunction !== "function") {
          throw new Error("apiFunction is not a valid function");
        }

        const response = await apiFunction();
        if (!response || !Array.isArray(response.results)) {
          throw new Error("Invalid API response format");
        }

        const mappedData = response.results.map((item) => ({
          value: item?.[optionKeys[0]] || "", // Default to empty string if undefined
          label: item?.[optionKeys[1]] || "Unnamed", // Default label
        }));

        console.log("API Response:", mappedData);
        setDropdownOptions(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setDropdownOptions([]); // Fallback to an empty array
      }
    };

    fetchData();
  }, [apiFunction, optionKeys, fieldName]); // Ensuring correct dependency tracking

  const handleValueChange = (selectedOption) => {
    handleChange(fieldName, selectedOption?.value || ""); // Handles null/undefined safely
  };

  return (
    <div className="row g-6" style={{ marginBottom: "40px" }}>
      <div className="col-sm-4">
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
      </div>
    </div>
  );
}
