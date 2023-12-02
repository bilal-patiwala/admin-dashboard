import React from 'react'
import '../style/tableheader.css'
const TableHeader = () => {
  return (
    <div className='table-header-container'>
        <input type="checkbox" name=""/>
        <p className='header-name'>name</p>
        <p className='header-email'>email</p>
        <p className='header-role'>role</p>
        <p className='header-action'>actions</p>
    </div>
  )
}

export default TableHeader