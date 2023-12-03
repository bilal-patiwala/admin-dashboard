import React, { useContext, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { HiCheck } from "react-icons/hi2";

import "../style/row.css";
const Row = ({ item, deleteCurrentRow, getSelectedRow, unSelectRow }) => {
  const [is_checked, setIsChecker] = useState(false);
  const [is_edit, setISEdit] = useState(false);
  const [edited_name, setEditedName] = useState("");
  const [edited_email, setEditedEmail] = useState("");
  const [edited_role, setEditedRole] = useState("");
  const handleCheck = (e) => {
    if (e.target.checked) {
      setIsChecker(true);
      getSelectedRow(e.target.value);
    } else {
      setIsChecker(false);
      unSelectRow(e.target.value);
    }
  };

  const handleEdit = () => {
    setISEdit(true);
  };

  const handleCheckEdit = () => {
    setISEdit(false);
    if (edited_name != "") {
      item.name = edited_name;
      setEditedName("")
    } else if (edited_email != "") {
      item.email = edited_email
      setEditedEmail("")

    } else if (edited_role != "") {
      item.role = edited_role;
      setEditedRole("")

    }
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };
  const handelRoleChange = (e) => {
    setEditedRole(e.target.value);
  };

  return (
    <tr className={`border-b ${is_checked ? "row-bg" : "no-row-bg"}`}>
      <td className="w-4 p-4">
        <input
          type="checkbox"
          name=""
          id=""
          className="checkbox"
          value={item.id}
          onChange={handleCheck}
        />
      </td>
      <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
        {is_edit ? (
          <input
            type="text"
            value={edited_name}
            className="input"
            onChange={handleNameChange}
          />
        ) : (
          <p>{item.name}</p>
        )}
      </td>
      <td className="px-6 py-4">
        {is_edit ?
        <input
          type="email"
          value={edited_email}
          className="input"
          onChange={handleEmailChange}
        />
        : ( <p>{item.email}</p> )}
      </td>
      <td className="px-6 py-4">
        {is_edit ?
        <input
          type="text"
          value={edited_role}
          className="input"
          onChange={handelRoleChange}
        />
        : ( <p>{item.role}</p> )}
      </td>
      <td className="px-6 py-4 flex gap-3">
        {is_edit ? (
          <HiCheck className="check" onClick={handleCheckEdit} />
        ) : (
          <FaRegEdit className="edit" onClick={handleEdit} />
        )}
        <AiOutlineDelete
          onClick={() => deleteCurrentRow(item.id)}
          className="delete"
        />
      </td>
    </tr>
    // <div className={`row-conatiner whitespace-nowrap ${is_checked?'row-bg':'no-row-bg'}`}>
    //     <input type="checkbox" name="" id="" className='checkbox' value={item.id} onChange={handleCheck}/>
    //     <p className='name '>{item.name}</p>
    //     <p className='email'>{item.email}</p>
    //     <p className='role'>{item.role}</p>
    //     <div className='action'>
    //       <FaRegEdit className='edit' />
    //       <AiOutlineDelete onClick={() => deleteCurrentRow(item.id)} className='delete'/>
    //     </div>
    // </div>
  );
};

export default Row;
