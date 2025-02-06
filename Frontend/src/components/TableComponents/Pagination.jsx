import React, { useState } from "react";
import { getPagination } from "@api/urls";
import { Link } from "react-router-dom";

export default function index({ paginationData, dataFunction }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [tempPage, setTempPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePrevious = async (event) => {
    event.preventDefault();
    if (paginationData.previous && !loading) {
      setLoading(true);
      try {
        const response = await getPagination(paginationData.previous);
        dataFunction(response);
        setTempPage((prev) => prev - 1);
        setCurrentPage(tempPage - 1);
      } catch (error) {
        console.error("Failed to fetch previous page:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleNext = async (event) => {
    event.preventDefault();
    if (paginationData.next && !loading) {
      setLoading(true);
      try {
        const response = await getPagination(paginationData.next);
        dataFunction(response);
        setTempPage((prev) => prev + 1);
        setCurrentPage(tempPage + 1);
      } catch (error) {
        console.error("Failed to fetch next page:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div
      className="dataTables_paginate paging_simple_numbers"
      id="DataTables_Table_0_paginate"
    >
      <ul className="pagination">
        <li
          className="paginate_button page-item previous disabled"
          id="DataTables_Table_0_previous"
        >
          <Link
            to="#"
            onClick={handlePrevious}
            style={{
              pointerEvents:
                paginationData.previous && !loading ? "auto" : "none",
              opacity: paginationData.previous && !loading ? 1 : 0.5,
              padding: 0,
            }}
            aria-disabled="true"
            role="link"
            data-dt-idx="previous"
            tabIndex={-1}
            className="page-link"
          >
            <i className="ti ti-chevron-left ti-sm" />
          </Link>
        </li>
        {paginationData.previous && (
          <li className="paginate_button page-item " onClick={handlePrevious}>
            <Link
              to="#"
              role="link"
              aria-current="page"
              data-dt-idx={0}
              tabIndex={0}
              className="page-link"
            >
              {loading ? "..." : currentPage - 1}
            </Link>
          </li>
        )}

        <li className="paginate_button page-item active">
          <Link
            to="#"
            role="link"
            data-dt-idx={1}
            tabIndex={0}
            className="page-link"
          >
            {loading ? "..." : currentPage}
          </Link>
        </li>
        {paginationData.next && (
          <li className="paginate_button page-item " onClick={handleNext}>
            <Link
              to="#"
              role="link"
              data-dt-idx={2}
              tabIndex={0}
              className="page-link"
            >
              {loading ? "..." : currentPage + 1}
            </Link>
          </li>
        )}

        <li
          className="paginate_button page-item next"
          id="DataTables_Table_0_next"
        >
          <Link
            to="#"
            onClick={handleNext}
            style={{
              pointerEvents: paginationData.next && !loading ? "auto" : "none",
              opacity: paginationData.next && !loading ? 1 : 0.5,
              padding: 0,
            }}
            role="link"
            data-dt-idx="next"
            tabIndex={0}
            className="page-link"
          >
            <i className="ti ti-chevron-right ti-sm" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
