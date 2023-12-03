import React, { useContext, useEffect, useState } from 'react'
import "../style/search.css"
import DataContext from '../context/DataContext'
const Search = () => {
  const [searchParam, setSearchParam] = useState('')
  const {getSearchData} = useContext(DataContext)
  const handleSearchText = (e) => {
    setSearchParam(e.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getSearchData(searchParam);
    }
  };

  const handleSearch = () => {
    getSearchData(searchParam)
  }
  return (
    <div>
      <input type="text" name="" value={searchParam} id="" placeholder='Search Name, Email, role' className='search-field' onChange={handleSearchText} onKeyDown={handleKeyDown}/>
      <button className='search-icon' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search