
import axios from 'axios'
import React, { useEffect,useMemo,useState } from 'react' // Effect to fetch data by calling function ,useMemo for reading columns data ,useState to store in arry after fetching data from api
 
import {useTable} from 'react-table'
import { COLUMNS1_2 } from './columns'
//import Hello fr   om './hello1.json'


import './table.css'


export const BasicTable = () => {
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

    })
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
                        <th{...column.getHeaderProps()}>{column.render('Header')}</th>
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
