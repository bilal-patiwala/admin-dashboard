import React, { useEffect, useState } from "react";
import "../style/paginatedBtn.css";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
const PaginationButton = ({ total_pages, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= total_pages; i++) {
    pageNumbers.push(i);
  }
  const siblings = 1;
  let [at_page, setAtPage] = useState(1);

  const handlePageClick = (number) => {
    paginate(number);
    setAtPage(number);
  };

  useEffect(() => {
  }, [at_page]);

  return (
    <>
      <div className="paginated-btn">
        {at_page == 1 ? (
          <HiChevronDoubleLeft disabled className="btn first-page" />
        ) : (
          <HiChevronDoubleLeft
            onClick={() => handlePageClick(1)}
            className="btn first-page"
          />
        )}

        {at_page == 1 ? (
          <HiChevronLeft disabled className="btn previous-page" />
        ) : (
          <HiChevronLeft
            onClick={() => handlePageClick(at_page - 1)}
            className="btn previous-page"
          />
        )}
        <div className="pagination">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageClick(number)}
              // href="#"
              className={`numbers ${at_page == number ? "active" : ""}`}
            >
              {number}
            </button>
          ))}
        </div>
        {at_page == total_pages ? (
          <HiChevronRight disabled className="btn next-page" />
        ) : (
          <HiChevronRight
            onClick={() => handlePageClick(at_page + 1)}
            className="btn next-page"
          />
        )}
        {at_page == total_pages ? (
          <HiChevronDoubleRight
          disabled
          className="btn last-page"
        />
        ) : (
          <HiChevronDoubleRight
            onClick={() => handlePageClick(total_pages)}
            className="btn last-page"
          />
        )}
      </div>
    </>
  );
};

export default PaginationButton;
