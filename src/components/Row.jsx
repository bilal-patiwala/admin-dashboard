import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'

const Row = ({item}) => {
    const handleCheck = (e) => {
        console.log(e.target.value, e.target.checked);
    }
  return (
    <div style={{display:"flex", gap:"10px"}}>
        <input type="checkbox" name="" value={item.id} onChange={handleCheck} />
        <p>{item.name}</p>
        <p>{item.email}</p>
        <p>{item.role}</p>
        <p>actions</p>
    </div>
  )
}

export default Row