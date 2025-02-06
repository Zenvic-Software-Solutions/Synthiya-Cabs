import React from "react";

export default function FileField(name, fieldData) {
  const { values, setFieldValue } = useFormikContext();
  const { previews, setPreviews } = useDataContext();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const newFiles = files.map((file) => ({
      file,
      imageUrl: URL.createObjectURL(file),
    }));

    setPreviews((prev) => [...prev, ...newFiles]);
    setFieldValue(name, [...(values[name] || []), ...files]);
  };

  const handleRemoveImage = (index) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    setFieldValue(name, values[name]?.filter((_, i) => i !== index) || []);
  };

  useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.imageUrl));
    };
  }, []);

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {fieldData.label || name}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        multiple
        className="form-control"
        accept="image/*"
        onChange={handleFileChange}
      />
      <div className="mt-2 d-flex gap-2 flex-wrap">
        {previews.map((preview, index) => (
          <div key={index} className="position-relative">
            <img
              src={preview.imageUrl}
              alt={`Preview ${index}`}
              className="img-thumbnail"
              width="100"
            />
            <button
              type="button"
              className="btn btn-danger btn-sm position-absolute top-0 end-0"
              onClick={() => handleRemoveImage(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <ErrorMessage name={name} component="div" className="text-danger mt-1" />
    </div>
  );
}
