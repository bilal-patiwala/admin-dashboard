import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import DataContext from "../context/DataContext";
import "../App.css";

const SelectedDelete = () => {
  const {onSelectedDelete} = useContext(DataContext)

  return (
    <AiOutlineDelete
      onClick={() => {
        onSelectedDelete();
      }}
      className="select-delete"
    />
  );
};

export default SelectedDelete;
