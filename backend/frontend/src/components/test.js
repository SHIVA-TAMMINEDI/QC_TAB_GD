import React from 'react'

import { Link,   } from "react-router-dom"
import  Count  from "./FilteringTable1_1"

export class Testing extends React.Component{
  

  
    constructor(props){
      super(props);
      
      console.log(props);
      this.state={
        stn:"",
        col:""

      };
       
      
  
  
    }
    
     updateThisCounter1=()=>{
      global.Station='/QC1_1'
      global.Column='COLUMNS1_1'
      global.Name='QC Station 1.1'
      this.setState({stn:'/QC1_1'}, () => { // not used
      console.log(this.state.stn, 'stn1');}); // not used
      this.setState({col:'COLUMNS1_1'}); // not used
    }
    updateThisCounter2=()=>{
      global.Station='/QC1_2'
      global.Column='COLUMNS1_2' 
      global.Name='QC Station 1.2'  
      setTimeout(() =>{   // not used 
        this.setState({stn:'/QC1_2'},  // not used
        function(){ // not used
          console.log(this.state.stn, 'stn1');// not used
       });// not used

      },10) // not used
      this.setState({col:'COLUMNS1_2'});// not used
      //if(this.state.stn==='') {// not used
       //   alert("null") }// not used

       }

       updateThisCounter3=()=>{
        global.Station='/QC2_1'
        global.Column='COLUMNS2_1'
        global.Name='QC Station 2.1'
        }
        updateThisCounter4=()=>{
        global.Station='/QC2_2'
        global.Column='COLUMNS2_2'
        global.Name='QC Station 2.2'
        }
        updateThisCounter5=()=>{
        global.Station='/QC3_1'
        global.Column='COLUMNS3_1'
        global.Name='QC Station 3'
        }
        updateThisCounter6=()=>{
        global.Station='/QC4_1'
        global.Column='COLUMNS4_1'
        global.Name='QC Station 4'
        }
        updateThisCounter7=()=>{
        global.Station='/QC5_1'
        global.Column='COLUMNS5_1'
        global.Name='QC Station 5.1'
        }
        updateThisCounter8=()=>{
        global.Station='/QC5_2'
        global.Column='COLUMNS5_2'
        global.Name='QC Station 5.2'
        }
        updateThisCounter9=()=>{
        global.Station='/QC6_1'
        global.Column='COLUMNS6_1'
        global.Name='QC Station 6'
        }
        updateThisCounter10=()=>{
        global.Station='/QC7_1'
        global.Column='COLUMNS7_1'
        global.Name='QC Station 7.1'
        }
        updateThisCounter11=()=>{
        global.Station='/QC7_2'
        global.Column='COLUMNS7_2'
        global.Name='QC Station 7.2'
        }
        updateThisCounter12=()=>{
        global.Station='/QC7_3'
        global.Column='COLUMNS7_3'
        global.Name='QC Station 7.3'
        }
        updateThisCounter13=()=>{
        global.Station='/QC7_4'
        global.Column='COLUMNS7_4'
        global.Name='QC Station 7.4'
        }
        updateThisCounter14=()=>{
        global.Station='/QC8_1'
        global.Column='COLUMNS8_1'
        global.Name='QC Station 8'
        }
        updateThisCounter15=()=>{
        global.Station='/QC9_1'
        global.Column='COLUMNS9_1'
        global.Name='QC Station 9'
        }
       
         
    
    
    render(){
      
    
        return<div>
        <span>{this.state.stn}</span> 
        <span>{this.state.col}</span>
        <Count text={this.state.col} count={this.state.stn} /> 
        
        
        <Link className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter1}> QC Station 1.1</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter2}> QC Station 1.2</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter3}> QC Station 2.1</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter4}> QC Station 2.2</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter5}> QC Station 3</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter6}> QC Station 4</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter7}> QC Station 5.1</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter8}> QC Station 5.2</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter9}> QC Station 6</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter10}> QC Station 7.1</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter11}> QC Station 7.2</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter12}> QC Station 7.3</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter13}> QC Station 7.4</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter14}> QC Station 8</Link>
        <Link  className = 'button btn-primary' to ="/QC" onClick={this.updateThisCounter15}> QC Station 9</Link>


        

        

        
      
      
    
      
        
        
        
      </div>
    }
  }
    
      

  //<Count text={this.state.col} count={this.state.stn} />      
        
 


  //window.location.href='http://localhost:3000/QC1_1';

  //this.setState({stn:'/QC1_2'}, () => {
   // console.log(this.state.stn, 'stn2');});
  //  this.setState({col:'COLUMNS1_2'}); 
  //  if(this.state.stn==='') {
   //  alert("null") 