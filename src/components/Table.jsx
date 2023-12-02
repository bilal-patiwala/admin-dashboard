import React, { useContext, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import Row from "./Row";
import DataContext from "../context/DataContext";
import PaginationButton from "./PaginationButton";
import ReactPaginate from "react-paginate";
import "../style/table.css";

const Table = () => {
  const { data, total_pages } = useContext(DataContext);
  const [paginated_data, setPaginatedData] = useState({
    data: data,
    offset: 0,
    row_per_page: 10,
    page_count: 0,
    current_data: [],
  });
  useEffect(() => {
    setPaginatedData((previous_data) => ({
      ...previous_data,
      page_count: previous_data.data.length / previous_data.row_per_page,
      current_data: previous_data.data.slice(
        paginated_data.offset,
        paginated_data.offset + paginated_data.row_per_page
      ),
    }));
  }, [paginated_data.row_per_page, paginated_data.offset]);
  const handlePageClick = (number) => {
    const offset = (number - 1) * paginated_data.row_per_page;
    setPaginatedData({ ...paginated_data, offset });
  };
  return (
    <>
      <div className="table-container ">
        <TableHeader />
        {paginated_data.current_data.map((item, index) => (
          <Row key={index} item={item} />
        ))}
        <div className="pagination-comp">
          <PaginationButton
            total_pages={total_pages}
            paginate={handlePageClick}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
