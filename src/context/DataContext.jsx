import { createContext, useEffect } from "react";
import { useState } from "react";
import { React, useContext } from "react";
const BASE_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const DataContext = createContext("");

export default DataContext;

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [isSearchEmpty, setSearchEmpty] = useState(true);
  const [selectedRow, setSelectedRow] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await (
          await fetch(BASE_URL, { method: "GET" })
        ).json();
        if (response.length > 0) {
          setData(response);
          setInitialData(response);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const getSearchData = (searchParam) => {
    console.log(searchParam);
    if (searchParam.trim() === "") {
      setData(initialData);
    } else {
      const searchData = initialData.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchParam) !== -1 ||
          item.email.toLowerCase().indexOf(searchParam) !== -1 ||
          item.role.toLowerCase().includes(searchParam) ||
          item.id.includes(searchParam)
      );
      setData(searchData);
    }
    console.log(data);
  };
  const getSelectedRow = (id) => {
    console.log(id);
    if (Array.isArray(id)) {
      setSelectedRow(id);
    } else {
      setSelectedRow((prevSelectedRow) => [...prevSelectedRow, id]);
    }
  };

  useEffect(() => {
    console.log(selectedRow);
  }, [selectedRow]);

  const unSelectRow = (id) => {
    if (Array.isArray(id)) {
      setSelectedRow([]);
    } else {
      setSelectedRow((prevSelectedRow) =>
        prevSelectedRow.filter((i) => i !== id)
      );
    }
    return false
  };

  const onSelectedDelete = () => {
    const updatedData = [...data];
    console.log(selectedRow);
    const sortedSelectedRow = [...selectedRow].sort((a, b) => b - a);

    sortedSelectedRow.forEach((index) => {
      updatedData.splice(index, 1);
    });
    console.log(updatedData);
    setData(updatedData);
    setSelectedRow([]);
  };

  const context = {
    data: data,
    total_pages: Math.ceil(data.length / 10),
    getSearchData: getSearchData,
    getSelectedRow: getSelectedRow,
    unSelectRow: unSelectRow,
    selectedRowCount: selectedRow.length,
    onSelectedDelete: onSelectedDelete,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};
