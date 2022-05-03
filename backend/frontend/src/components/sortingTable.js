
import axios from 'axios'
import React, { useEffect,useMemo,useState } from 'react'
 
import {useTable,useSortBy} from 'react-table'
import { COLUMNS1_1 } from './columns'
//import Hello from './hello1.json'


import './table.css'


export const SortingTable = () => {
    const columns = useMemo(()=>COLUMNS1_1,[])
    
    const [tooldata,settooldata] = useState([]) // using state for store api data
    const data = tooldata //useMemo(()=>Hello,[])

    // fetching data from api
    const tool = async ()=> {
        try{
            const data = await axios.get("test")
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

    },useSortBy)
    const {getTableProps,
        getTableBodyProps,
         headerGroups,
         rows,
         prepareRow,
        } = tableInstance
  return (
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
  )
}
