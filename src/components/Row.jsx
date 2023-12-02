import React, { useContext, useEffect } from 'react'
import "../style/row.css"
const Row = ({item}) => {
    const handleCheck = (e) => {
        console.log(e.target.value, e.target.checked);
    }
  return (
    <div className='row-conatiner'>
        <input type="checkbox" name="" id="" className='checkbox' value={item.id} onChange={handleCheck}/>
        <p className='name'>{item.name}</p>
        <p className='email'>{item.email}</p>
        <p className='role'>{item.role}</p>
        <p className='action'>actions</p>
    </div>
  )
}

export default Row