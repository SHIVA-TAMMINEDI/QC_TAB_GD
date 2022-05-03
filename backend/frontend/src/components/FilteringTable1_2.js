
import axios from 'axios'
import React, { useEffect,useMemo,useState } from 'react'
 
import {useTable,useSortBy,useGlobalFilter} from 'react-table'
import { COLUMNS1_2} from './columns'
import { GlobalFilter } from './GlobalFilter'
//import Hello from './hello1.json'
import './table.css'


export const FilteringTable1_2 = () => {
    const columns = useMemo(()=>COLUMNS1_2,[])
    
    const [tooldata,settooldata] = useState([]) // using state for store api data
    const data = tooldata //useMemo(()=>Hello,[])

    // fetching data from api
    const tool = async ()=> {
        try{
            const data = await axios.get("QC1_2")
            console.log(data.data)
            settooldata(data.data)
        }

    
    catch(e){
        console.log(e)
    }}
useEffect(() => {tool()},[]) // calling the fetch function
  



   const tableInstance = useTable({
        columns,
        data

    },useGlobalFilter,useSortBy)

    const {getTableProps,
        getTableBodyProps,
         headerGroups,
         rows,
         prepareRow,
         state,
         setGlobalFilter,
        } = tableInstance

const {globalFilter}=state        
  return (
      <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    <table{...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup)=> (
                    <tr{...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column)=>(
                        <th{...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                        <span>
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼'):''}
                        </span>
                        </th>
                    ))

                    }

                    </tr>
                ))
            }


        </thead>
        <tbody{...getTableBodyProps()}>
        {
            rows.map(row=>{
                prepareRow(row)
                return(
                    <tr{...row.getRowProps()}>
                    {row.cells.map((cell)=>{
                        return <td{...cell.getCellProps()}>{cell.render('Cell')}</td>})}
                        </tr>
                )
            })
        }


        </tbody>
    </table>
    </>)
}
