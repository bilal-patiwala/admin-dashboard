import React from 'react'

const PaginationButton = ({total_pages, paginate}) => {
    const pageNumbers = []
    for(let i=1;i<total_pages;i++){
        pageNumbers.push(i);
    }
    
  return (
    <>
        <ul className="pagination">
            {pageNumbers.map((number) => (
                <li key={number}>
                    <a onClick={() => paginate(number)} href="!#">{number}</a>
                </li>
            ))}
        </ul>
    </>
  )
}

export default PaginationButton