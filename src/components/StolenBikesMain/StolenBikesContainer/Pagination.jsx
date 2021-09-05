import React,{useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({setStolenBikes, bikes}) => {

  const [pageNumber, setPageNumber] = useState(0)

  const bikesPerPage = 10

  const pageVisited = pageNumber * bikesPerPage

  const pageCount = Math.ceil(bikes && bikes.length / bikesPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  useEffect(() => {
    setStolenBikes(bikes.slice(pageVisited, pageVisited + bikesPerPage))
  })

  return (
    <ReactPaginate
      previousLabel={'Previous'}
      nextLabel={'Next'}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={'pagination_bttns'}
      previousLinkClassName={'previous_bttn'}
      nextLinkClassName={'next_bttn'}
      disabledClassName={'pagination_disabled'}
      activeClassName={'pagination_active'}
      />
  )
}

export default Pagination
