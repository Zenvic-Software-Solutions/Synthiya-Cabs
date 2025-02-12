import React, { useState } from "react";
import { useDataContext } from "@context/DynamicFormContext";

export default function Index({ deleteFunction }) {
  const { modalUUID } = useDataContext();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState();

  const handleDelete = async () => {
    setIsLoading(true);
    if (modalUUID && deleteFunction) {
      try {
        await deleteFunction({ uuid: modalUUID });
        setStatus({ successMsg: "Form Submitted Successfully." });
        setTimeout(() => {
          $("#deleteModal").modal("hide");
          setStatus("");
        }, 1000);
      } catch (error) {
        setStatus({ errorMsg: "Form failed to Submit." });
        setTimeout(() => {
          setIsLoading(false);
          // setStatus("");
        }, 1000);
      }
    }
  };

  function StatusAlert() {
    if (!status) return;
    return (
      <div
        className={`alert alert-light-border-${
          status?.successMsg ? "success" : "danger"
        } d-flex align-items-center justify-content-between`}
        role="alert"
      >
        <div className="mb-0 d-flex align-items-center">
          {status?.successMsg ? (
            <i className="ti ti-circle-check f-s-18 me-2" />
          ) : (
            <i className="ti ti-power f-s-18 me-2" />
          )}

          {status?.successMsg || status?.errorMsg}
        </div>

        {/* <i className="ti ti-x" data-bs-dismiss="alert" /> */}
      </div>
    );
  }
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex={-1}
      aria-modal="false"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Deletion</h5>
            <button
              type="button"
              className="btn-close m-0 fs-5"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-3 text-center align-self-center">
                <img
                  src="/assets/images/modals/04.png"
                  alt=""
                  className="img-fluid b-r-10"
                />
              </div>
              <div className="col-lg-9 ps-4">
                <h5>Are you sure you want to delete this item?</h5>
                <p>This action cannot be undone.</p>
              </div>
            </div>
            <StatusAlert />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light-danger"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
            <button
              type="button"
              className="btn btn-light-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
