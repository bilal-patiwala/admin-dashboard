import React, { useState } from "react";
import "../style/tableheader.css";
const TableHeader = ({toggleSelectAllPage}) => {
  const [is_checked, setIsChecker] = useState(false);
  const handleCheck = (e) => {
    if(e.target.checked){
      setIsChecker(true)
      toggleSelectAllPage(true)
    }
    else{
      setIsChecker(false)
      toggleSelectAllPage(false)
    }
  }
  return (
      <thead className="border-b">
        <tr>
          <th scope="col" className="p-4">
            <input type="checkbox" name="" onChange={handleCheck} />
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Role
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
    // <div className="table-header-container">

    //   {/* <input type="checkbox" name="" />
    //   <p className="header-name">name</p>
    //   <p className="header-email">email</p>
    //   <p className="header-role">role</p>
    //   <p className="header-action">actions</p> */}
    // </div>
  );
};

export default TableHeader;
