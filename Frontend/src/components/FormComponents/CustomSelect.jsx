import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useFormikContext } from "formik";

const CreatableSelectComponent = ({
  name,
  options = [],
  placeholder = "Select or create an option...",
  isMulti = false,
  isClearable = true,
  apiFunction,
  ...props
}) => {
  const [dropdownOptions, setDropDownOptions] = useState([]);
  const { setFieldValue, values } = useFormikContext();

  useEffect(() => {
    const result = options.map((item) => ({
      label: item.identity,
      value: item.id,
    }));
    setDropDownOptions(result);
  }, [options]);

  const handleChange = (selectedOption) => {
    if (isMulti) {
      setFieldValue(name, selectedOption || []);
    } else {
      setFieldValue(name, selectedOption || null);
    }
  };

  const handleCreate = async (inputValue) => {
    try {
      const updatedValue = await apiFunction({ identity: inputValue });
      const newOption = {
        value: updatedValue.id,
        label: updatedValue.identity,
      };
      setDropDownOptions((prev) => [...prev, newOption]);
      if (isMulti) {
        handleChange([...(values[name] || []), newOption]);
      } else {
        handleChange(newOption);
      }
    } catch (error) {
      console.error("Error creating new option:", error);
    }
  };

  return (
    <CreatableSelect
      isMulti={isMulti}
      isClearable={isClearable}
      options={dropdownOptions}
      value={values[name]}
      onChange={handleChange}
      onCreateOption={handleCreate}
      placeholder={placeholder}
    />
  );
};

export default CreatableSelectComponent;
