import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function Paginate({ page, setPage, totalPages }) {
  function adjustPage(amount) {
    setPage(prevPage => prevPage + amount)
  }

  function adjustPageByPageNumber(pageNumber) {
    setPage(pageNumber)
  }
  const hasNextPage = page !== totalPages;

  return (
    <Pagination className="justify-content-center px-5 my-4">  
      {page !== 1 && <Pagination.First onClick={() => adjustPageByPageNumber(1)}>First</Pagination.First>}
      {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)}>Previous</Pagination.Prev>}
      {<Pagination.Item active onClick={() => adjustPage(1)}>{page}</Pagination.Item>}
      {hasNextPage && <Pagination.Item onClick={() => adjustPage(1)}>{page + 1}</Pagination.Item>}
      {page < totalPages && <Pagination.Ellipsis />}
      {hasNextPage && (page !== totalPages-1) && <Pagination.Last onClick={() => adjustPageByPageNumber(totalPages)}>{totalPages}</Pagination.Last>}
      {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)}>Next</Pagination.Next>}
    </Pagination>
  )
}