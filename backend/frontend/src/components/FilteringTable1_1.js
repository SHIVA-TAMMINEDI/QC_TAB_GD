
import axios from 'axios'
import React, { useEffect,useMemo,useState } from 'react'
import TabletoExcel from 'react-html-table-to-excel'
import {useTable,useSortBy,useGlobalFilter} from 'react-table'
import { COLUMNS1_1,COLUMNS1_2,} from './columns'
import { GlobalFilter } from './GlobalFilter'
import Play from './Count'
//import Hello from './hello1.json'
import './table.css'




function Count({ text, count }) {
	console.log(`Rendering ${text}`)
    const col = {text}
     const stn={count}
     //global.Station = stn.count;
    // global.Column = col.text;
     //Column= col.text
     //Station= stn.count
    console.log(global.Station)
    console.log(global.Column)

	return <div>{text} - {count}</div>
}




export default React.memo(Count)





export const FilteringTable1_1 = () => {
    global.ram = global.Column

    const raghu = Play(global.ram)

 
    
    


    const columns = useMemo(()=>raghu,[])

    
    const [tooldata,settooldata] = useState([]) // using state for store api data
    const data = tooldata //useMemo(()=>Hello,[])
    

    // fetching data from api
    const tool = async ()=> {
        try{
            const url =  global.Station
            const data = await axios.get(url)
            console.log(url )
            console.log(data.data)
            console.log(global.Column )
            console.log(url )
            
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
      <TabletoExcel
      className = 'button1 btn-primary'
    table="QCdata"
    filename={global.Name}
    sheet={global.Name}
    buttonText="Export To Excel"/>
    <table{...getTableProps()} id="QCdata">
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
