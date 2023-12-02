import { createContext, useEffect } from "react";
import { useState } from "react";
import { React, useContext } from "react";
import Api_Data from "../assets/api_data.json"
const BASE_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const DataContext = createContext("");

export default DataContext;

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await (
          await fetch(BASE_URL, { method: "GET" })
        ).json();
        if (response.length > 0) {setData(response)};
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const context = {
    "data":Api_Data,
    "total_pages" : Math.ceil(Api_Data.length/10)
  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
};
