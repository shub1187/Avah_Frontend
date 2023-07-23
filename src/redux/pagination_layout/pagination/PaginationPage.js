import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PaginationAction, PaginationActionSearch, PaginationStart } from './PaginationAction'
import { useMemo } from "react"
import { useSortBy, useTable, useAsyncDebounce, usePagination, useRowSelect } from 'react-table'
import { useCssUnit } from 'react-table-css-unit'
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { FETCH_REQUEST } from '../../../network/ApiConstant'
import { SpPaginationAction, SpPaginationActionSearch, SpPaginationStart } from '../../../serviceprovider/pagination_layout/pagination/SpPaginationAction'
import Loader from '../../../components/common/Loader'
import ConfigName from '../../../routes/configName'
import PreviousIcon from '@mui/icons-material/ArrowBackIos'
import NextIcon from '@mui/icons-material/ArrowForwardIos'

function PaginationPage(props) {
  const [setLoader, bindLoader, closeLoader] = Loader('')

  const dispatch = useDispatch()
  const pageState = useSelector((state) => state.appState.pagination);
  const userState = useSelector((state) => state.appState.user);

  let [filter, setFilter] = useState("")


  let columns = useMemo(() => props.column, [])
  // let data = useMemo(() => pageState?.queryPageSortBy, [pageState?.queryPageSortBy])
  // let preprocessedData = props.data?.map((d)=>({
  //   ...d,
  //   updated_at:new Date(d.updated_at)
  // }))
  let data = props.data?.results || [];
  console.log("ln 32 shub",data)
  // let data = useMemo(()=>preprocessedData??[],[])
  // console.log("RAEES",data)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchPage, setSearchPage] = useState(false)

  var typeOfUser = localStorage.getItem("TYPE_OF_USER") == "1"

  let menuname = props.currentPage
  const pagination = () => {

    if (typeOfUser)
      dispatch(PaginationAction(currentPage - 1, menuname))
    else
      dispatch(SpPaginationAction(currentPage - 1, menuname))

  }

  useEffect(() => {

    console.log("-----> pageState.isLoading   ---->" + pageState.isLoading +
      "\n useState.isLoading   ---->" + userState.loading)
    if (pageState.isLoading == 1 || userState.loading == 1) {
      closeLoader()
    }else if (pageState.isLoading == 0 || userState.loading == 0) {
      setLoader()
    }


  }, [pageState.isLoading, userState.loading]);

  // useEffect(() => {

  //   if (pageState.reloadPage) {
  //     pagination()
  //   }
  //   if (pageState.isFirstLoad) {
  //     if (typeOfUser)
  //       dispatch(PaginationStart(FETCH_REQUEST))
  //     else
  //       dispatch(SpPaginationStart(FETCH_REQUEST))
  //     pagination()
  //   }


  // }, [pageState.isFirstLoad, pageState.reloadPage,]);

  useEffect(() => {

    console.log(pageState.isFirstLoad + "   pageState.isFirstLoad")
    if (!pageState.isFirstLoad && !searchPage) {
      if (typeOfUser)
        dispatch(PaginationStart(FETCH_REQUEST))
      else
        dispatch(SpPaginationStart(FETCH_REQUEST))

      pagination()
    }

    if (searchPage) {
      searchpagination()
    }

  }, [currentPage, searchPage]);

  const searchpagination = () => {
    if (typeOfUser)
      dispatch(PaginationActionSearch(currentPage - 1, filter, menuname))
    else
      dispatch(SpPaginationActionSearch(currentPage - 1, filter, menuname))

  }
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 ,pageSize:10}
    },
    useSortBy,
    useCssUnit,
    usePagination,
    useRowSelect,
    hooks => {
      //<SelectRow {...row.getToggleRowSelectedProps()} />
      if(!props.RequestLayout){
        hooks.visibleColumns.push(columns => [
          ...columns,
          {
  
            id: 'selection',
            Header: "ACTION",
  
  
            Cell: ({ row }) =>
  
              <div className="tb-dropdown" style={{ 'float': 'left' }}>
                <button className='dot-tran-btn'  >...</button>
  
                <div className="tb-dropdown-content">
                  {props.onActionClick(row)}
                </div>
  
              </div>
  
  
          },
  
        ])
      }

    }

  )
  // 
  const { pageIndex, pageSize } = state

  const onSearchChange = useAsyncDebounce(value => {
    if (filter.length > 0) {
      setSearchPage(true)
      setCurrentPage(1)
      searchpagination()
      // setFilter(value||'')
    } else {

      setSearchPage(false)
      setCurrentPage(1)
    }

  }, 1000)

  const firstPageRows = page.slice(0, 10)


  return (
    <div>

      <div className="row p-0" style={{ 'display': 'flex' }}>

        {/* ------------------Search view--------------- */}

        <div className="column" style={{ 'width': '80%' }}>

          <form className="nosubmit mt-2">
            <input style={{ 'border': 'none 0px', 'width': '100%', height: '55px', fontSize: '15px' }}
              className='nosubmit' type="search" placeholder="Search for order ID, Customer, Status......" value={filter || ''} onChange={(e) => {

                setFilter(e.target.value)
                onSearchChange()
              }
              } />
          </form>

        </div>
        {/* ------------------Add button--------------- */}
        {/* <div className="column" style={{ 'width': '20%' }}>
          <button className='custombutton' onClick={() => { props.onAddUserClick() }} >+ {ConfigName(menuname)}</button>
        </div> */}
      </div>


      <table {...getTableProps()} className="table-bg mt-2">

        {/* -------------Table Head--------------- */}
        <thead className='table-header ' >
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th   {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}

                  {column.Header != "Action" ?
                    <span style={{ fontSize: '8px' }} >
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' ▲ '
                          : '  ▼'
                        : '  ▼'}
                    </span> : null//
                  }

                </th>
              ))}
            </tr>
          ))}

        </thead>

        {/* -------------Table body--------------- */}


        <tbody {...getTableBodyProps()} className="table-row">
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{
                    cell.render('Cell')

                  }</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div style={{display:"flex",justifyContent:"flex-end",marginTop:"5px"}}>
      <PreviousIcon
        style={{color:canPreviousPage?"purple":""}}
        onClick={()=>previousPage()}
        disabled={!previousPage}
      />
      <NextIcon
        style={{color:canNextPage?"purple":""}}
        onClick={()=>nextPage()}
        disabled={!nextPage}
      />
        
        {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}

        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}


        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}

        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span> */}

        {/* <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '} */}

        {/* <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[2, 5, 10].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}





      </div>
      {/* ---------------------Pagination button control--------------------- */}
      <div className='bottomPage m-0' >
        <PaginationControl
          page={currentPage}
          between={3}
          total={pageState.totalCount * 10}
          limit={10}
          changePage={(pageNo) => {
            setCurrentPage(pageNo);
          }}
          ellipsis={1}
        />
      </div>
      {bindLoader()}

    </div>
  )
}

export default PaginationPage
