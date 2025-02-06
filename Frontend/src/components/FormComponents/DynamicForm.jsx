import React, { useEffect, useState } from "react";
import { Formik, Form, useFormikContext, Field, ErrorMessage } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "@context/DataContext";
import { useAppContext } from "@context/AppContext";
import { Loader } from "@components";
import {} from "@api/urls";

export function SubmitButton() {
  const { isSubmitting } = useFormikContext();
  return (
    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
}

export function StatusAlert() {
  const { status } = useFormikContext();
  if (!status) return;
  return (
    <div
      className={`alert alert-${status?.successMsg ? "success" : "danger"}`}
      role="alert"
    >
      {status?.successMsg || status?.errorMsg}
    </div>
  );
}

export function TextField({ name, fieldData }) {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {fieldData.label || name}
      </label>
      <Field
        type="text"
        name={name}
        id={name}
        className="form-control"
        placeholder={fieldData.placeholder}
        value={values[name] || ""}
        onChange={(e) => setFieldValue(name, e.target.value)}
        defaultValue={fieldData["defaultValue"]}
      />
      <ErrorMessage name={name} component="div" className="text-danger mt-1" />
    </div>
  );
}

const uploadData = async (files) => {
  const formData = new FormData();

  files.forEach((item) => {
    if (item.file) {
      formData.append("file", item.file);
    }
  });

  if ([...formData.entries()].length !== 0) {
    formData.append("model", "ProductImage");
    const response = await imageUpload(formData);

    return response?.file_ids?.filter((id) => id !== null);
  }

  return [];
};

export function ImageField({ name, fieldData }) {
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

export function DateField({ name, fieldData }) {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {fieldData.label || name}
      </label>
      <Field
        type="date"
        name={name}
        id={name}
        className="form-control"
        placeholder={fieldData.placeholder}
        value={values[name] || ""}
        onChange={(e) => setFieldValue(name, e.target.value)}
        defaultValue={fieldData["defaultValue"]}
      />
      <ErrorMessage name={name} component="div" className="text-danger mt-1" />
    </div>
  );
}

export function NumberField({ name, fieldData }) {
  const { values, setFieldValue } = useFormikContext();
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {fieldData["label"] || name}
      </label>
      <Field
        type="number"
        name={name}
        id={name}
        className="form-control"
        placeholder={fieldData["placeholder"]}
        defaultValue={fieldData["defaultValue"]}
        value={values[name] || ""}
        onChange={(e) => setFieldValue(name, e.target.value)}
      />
      <ErrorMessage name={name} component="div" className="text-danger mt-1" />
    </div>
  );
}

export function SelectField({ name, fieldData }) {
  const { values, setFieldValue } = useFormikContext();
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {fieldData["label"] || name}
      </label>
      <Field
        as="select"
        name={name}
        id={name}
        className="form-control"
        defaultValue={fieldData["defaultValue"]}
        value={values[name] || ""}
        onChange={(e) => setFieldValue(name, e.target.value)}
      >
        <option value="">Select an option</option>
        {fieldData.dropdownOptions.map((option, index) => (
          <option key={index} value={option.id}>
            {option.identity}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="text-danger mt-1" />
    </div>
  );
}

export function BooleanSelectField({ name, fieldData }) {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {fieldData.label || name}
      </label>
      <Field
        as="select"
        name={name}
        id={name}
        className="form-control"
        value={
          values[name] !== undefined ? values[name] : fieldData.defaultValue
        }
        onChange={(e) => setFieldValue(name, e.target.value === "true")}
      >
        <option value="">Select an option</option>
        {fieldData.dropdownOptions.map((option, index) => (
          <option key={index} value={option.id}>
            {option.identity}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="text-danger mt-1" />
    </div>
  );
}

const FieldNames = {
  text: TextField,
  number: NumberField,
  select: SelectField,
  file: ImageField,
  date: DateField,
  boolean: BooleanSelectField,
};

function FormElements({ formFields }) {
  return (
    <div className="card mb-6" style={{ padding: "20px 40px" }}>
      <div className="card-body">
        <div className="row pt-4 pb-4">
          {Object.entries(formFields).map(([key, field]) => {
            const Component = FieldNames[field.type];

            return key == "images" ? (
              <div className="col-md-12" key={key}>
                <Component name={key} fieldData={field} />
              </div>
            ) : (
              <div className={"col-md-4"} key={key}>
                <Component name={key} fieldData={field} />
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <StatusAlert />
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function mapMetaAndUrls(name, data) {
  const { initial, urls } = data;

  const findAllByIds = (ids, source, key) =>
    (Array.isArray(ids) ? ids : [ids])
      .map((id) => {
        const item = source.find((item) => item.id === id && key in item);
        return item ? { id: item.id, imageUrl: item[key] || "" } : null;
      })
      .filter(Boolean);

  return findAllByIds(initial[name], urls, name);
}

export default function Index({
  formInitialData,
  formFields,
  validationSchema,
  redirectUrl = "#",
  apiFunction,
  paramUUID,
  isAuthForm = false,
  isUserForm = false,
  breadcrumbData,
  children,
}) {
  const navigate = useNavigate();
  const { uuid } = useParams();
  const { trigger, setTrigger, previews, setPreviews } = useDataContext();

  const formUUID = paramUUID || uuid;
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { setBreadcrumbs } = useAppContext();

  useEffect(() => {
    setBreadcrumbs(breadcrumbData);
  }, [setBreadcrumbs]);

  useEffect(() => {
    if (formInitialData) {
      setFormData(formInitialData);
    } else {
      const initialValues = Object.keys(formFields).reduce((acc, key) => {
        acc[key] = formFields[key].value;
        return acc;
      }, {});
      setFormData(initialValues);
    }
  }, [formFields]);

  const handleSubmit = async (
    values,
    { setSubmitting, setStatus, resetForm }
  ) => {
    setStatus("");
    try {
      if (values?.images) {
        const imageResult = await uploadData(previews);

        const imageIds = previews
          .map((item) => item.id)
          .filter((id) => id !== null && id !== undefined);

        values.images = [...imageIds, ...imageResult].filter(
          (item) => item !== null && item !== undefined
        );
      }

      const apiCall = isAuthForm
        ? apiFunction.postForm(values)
        : isUserForm
        ? apiFunction.patchForm(values)
        : formUUID
        ? apiFunction.patchForm(formUUID, values)
        : apiFunction.postForm(values);

      const response = await apiCall;

      if (isAuthForm) {
        localStorage.setItem("accessToken", response.access);
        localStorage.setItem("refreshToken", response.refresh);
        window.dispatchEvent(new Event("tokenChange"));
      }

      setStatus({ successMsg: "Form Submitted Successfully." });

      setTimeout(() => {
        resetForm();
        setSubmitting(false);
        navigate(redirectUrl);
        setTrigger(!trigger);
      }, 1500);
    } catch (err) {
      setStatus({
        errorMsg:
          err.response?.data?.data?.detail ||
          err.response?.data?.data?.email ||
          "Network issue. Please try again.",
      });
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchFormData = async () => {
      if (formUUID && !isAuthForm) {
        const response = await apiFunction.getForm(formUUID);
        if (response.initial && response.urls) {
          const mappedData = mapMetaAndUrls("images", response);
          setPreviews(mappedData || []);
        }
        setFormData(response.initial || formData);
        setDynamicFormMeta(response);
      } else if (isUserForm) {
        const response = await apiFunction.getForm();
        setFormData(response || formData);
        setDynamicFormMeta(response);
      }
      setIsLoading(false);
    };
    fetchFormData();
  }, [formUUID, isAuthForm, isUserForm]);

  // if (isLoading) return <Loader />;

  return (
    <Formik
      initialValues={{ ...formData }}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>{children || <FormElements formFields={formFields} />}</Form>
    </Formik>
  );
}
