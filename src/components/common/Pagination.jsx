import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={currentPage === page ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.prototype = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination;
