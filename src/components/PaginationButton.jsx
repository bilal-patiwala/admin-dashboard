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
    console.log(at_page);
  }, [at_page]);

  return (
    <>
      <div className="paginated-btn">
        {at_page == 1 ? (
          <HiChevronDoubleLeft disabled className="btn first-btn" />
        ) : (
          <HiChevronDoubleLeft
            onClick={() => handlePageClick(1)}
            className="btn first-btn"
          />
        )}

        {at_page == 1 ? (
          <HiChevronLeft disabled className="btn prev-btn" />
        ) : (
          <HiChevronLeft
            onClick={() => handlePageClick(at_page - 1)}
            className="btn prev-btn"
          />
        )}
        <div className="pagination">
          {pageNumbers.map((number) => (
            <a
              key={number}
              onClick={() => handlePageClick(number)}
              href="!#"
              className={`numbers ${at_page == number ? "active" : ""}`}
            >
              {number}
            </a>
          ))}
        </div>
        {at_page == total_pages ? (
          <HiChevronRight disabled className="btn next" />
        ) : (
          <HiChevronRight
            onClick={() => handlePageClick(at_page + 1)}
            className="btn next"
          />
        )}
        {at_page == total_pages ? (
          <HiChevronDoubleRight
          disabled
          className="btn last"
        />
        ) : (
          <HiChevronDoubleRight
            onClick={() => handlePageClick(total_pages)}
            className="btn last"
          />
        )}
      </div>
    </>
  );
};

export default PaginationButton;
