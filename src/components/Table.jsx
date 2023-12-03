import React, { useContext, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import Row from "./Row";
import DataContext from "../context/DataContext";
import PaginationButton from "./PaginationButton";
import ReactPaginate from "react-paginate";
import "../style/table.css";

const Table = () => {
  const { data, total_pages, getSelectedRow, unSelectRow, selectedRowCount } =
    useContext(DataContext);
  const [paginated_data, setPaginatedData] = useState({
    data: data,
    offset: 0,
    row_per_page: 10,
    page_count: 0,
    current_data: [],
  });
  useEffect(() => {
    setPaginatedData((prevData) => ({
      ...prevData,
      data: data,
      page_count: Math.ceil(data.length / prevData.row_per_page),
      current_data: data.slice(
        prevData.offset,
        prevData.offset + prevData.row_per_page
      ),
    }));
  }, [data]);
  useEffect(() => {
    setPaginatedData((previous_data) => ({
      ...previous_data,
      page_count: Math.ceil(
        previous_data.data.length / previous_data.row_per_page
      ),
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

  const deleteCurrentRow = (id) => {
    const updatedData = paginated_data.data.filter((item, index) => item.id !== id);

    const newPageCount = Math.ceil(
      updatedData.length / paginated_data.row_per_page
    );

    const newOffset =
      paginated_data.offset >= updatedData.length
        ? Math.max(0, (newPageCount - 1) * paginated_data.row_per_page)
        : paginated_data.offset;

    setPaginatedData({
      ...paginated_data,
      data: updatedData,
      page_count: newPageCount,
      offset: newOffset,
      current_data: updatedData.slice(
        newOffset,
        newOffset + paginated_data.row_per_page
      ),
    });
  };

  const toggleSelectAllPage = (is_check) => {
    console.log(is_check);
    if (is_check) {
      const currentPageRows = paginated_data.current_data.map((item, index) => index);
      console.log(currentPageRows);
      getSelectedRow(currentPageRows);
    } else {
      unSelectRow([]);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto m-3">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHeader toggleSelectAllPage={toggleSelectAllPage} />
          <tbody>
            {paginated_data.current_data.map((item, index) =>
              item ? (
                <Row
                  item={item}
                  key={index}
                  index={index}
                  deleteCurrentRow={deleteCurrentRow}
                  getSelectedRow={getSelectedRow}
                  unSelectRow={unSelectRow}
                />
              ) : (
                <tr
                  className="bg-white border-b h-[67px] dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td className="px-6 py-4"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )
            )}
          </tbody>
        </table>
        
      </div>

      <div className="footer">
          <p>
            {selectedRowCount} of {paginated_data.data.length} Rows Selected
          </p>
          <div className="pagination-container">
            <p>
              Page {paginated_data.offset / 10 + 1} of{" "}
              {paginated_data.page_count}
            </p>
            <PaginationButton
              total_pages={Math.ceil(paginated_data.data.length / 10)}
              paginate={handlePageClick}
            />
          </div>
        </div>

      {/* <div className="table-container ">
        <TableHeader />
        {paginated_data.current_data.map((item, index) => (
          <Row key={index} item={item} deleteCurrentRow={deleteCurrentRow} getSelectedRow={getSelectedRow} unSelectRow={unSelectRow} />
        ))}
        <div className="pagination-comp">
          <PaginationButton
            total_pages={Math.ceil(paginated_data.data.length / 10)}
            paginate={handlePageClick}
          />
        </div>
      </div> */}
    </>
  );
};

export default Table;
