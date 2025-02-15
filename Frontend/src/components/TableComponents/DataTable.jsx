import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";
import "datatables.net-responsive-bs5";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { formatDate } from "@utils/dateFormator";

DataTable.use(DT);

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj) || "-";
};

function Index({ tableMeta, tableData, actionLink, actionButton }) {
  const navigate = useNavigate();

  const statusTag = (status) => {
    let statusClass = "";
    switch (status) {
      case "Success":
        statusClass = "bg-label-success";
        break;
      case "Failure":
        statusClass = "bg-label-danger";
        break;
      case "Pending":
        statusClass = "bg-label-warning";
        break;
      default:
        statusClass = "bg-label-secondary";
        break;
    }

    return `<span class="badge ${statusClass} text-capitalized"> ${status} </span>`;
  };

  const columns = Object.keys(tableMeta).map((field) => ({
    title: tableMeta[field],
    data: field,
    render: (data, type, row) => {
      const value = getNestedValue(row, field);
      if (field === "status") return statusTag(value);
      if (field === "created_at") return formatDate(value);
      return value;
    },
  }));

  if (actionLink) {
    columns.push({
      title: "Actions",
      data: null,
      render: function (data, type, row) {
        let resultData = ``;

        if (actionLink.editLink) {
          resultData += `
            <button class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill edit-btn" data-uuid="${row.uuid}">
              <i class="ti ti-edit ti-md"></i>
            </button>
          `;
        }

        if (actionLink.viewLink) {
          resultData += `
            <button class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill view-btn" data-uuid="${row.uuid}">
              <i class="ti ti-eye ti-md"></i>
            </button>
          `;
        }

        if (actionLink.deleteLink) {
          resultData += `
          <button class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill delete-btn" data-uuid="${row.uuid}">
            <i class="ti ti-trash ti-md"></i>
          </button>
        `;
        }

        return `
          <div class="d-flex align-items-center">
            ${resultData}
          </div>
        `;
      },
    });
  }

  if (actionButton) {
    columns.push({
      title: "Actions",
      data: null,
      render: function (data, type, row) {
        return `
                <div class="d-flex align-items-center">
                <button
                  class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill edit-popup-btn" data-uuid="${row.uuid}"
                  tabIndex={0}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                <span>
                <i class="ti ti-edit ti-md"></i>
                </span>
                </button>
                </div>
        `;
      },
    });
  }

  useEffect(() => {
    document.querySelectorAll(".edit-btn").forEach((btn) => {
      const uuid = btn.getAttribute("data-uuid");
      btn.addEventListener("click", () =>
        navigate(`${actionLink.editLink}/${uuid}`)
      );
    });

    document.querySelectorAll(".view-btn").forEach((btn) => {
      const uuid = btn.getAttribute("data-uuid");
      btn.addEventListener("click", () =>
        navigate(`${actionLink.viewLink}/${uuid}`)
      );
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      const uuid = btn.getAttribute("data-uuid");
      btn.addEventListener("click", () => {
        // console.log("uuid tble", uuid);
        // setTransfer(uuid);
      });
    });
  }, [tableData, actionLink]);

  return (
    <DataTable
      data={tableData}
      columns={columns}
      className="display"
      options={{
        paging: false,
        searching: false,
        info: false,
        ordering: false,
        responsive: true,
      }}
    />
  );
}

export default Index;
