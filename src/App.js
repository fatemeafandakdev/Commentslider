import React,{useState} from 'react';
import './App.css';
import data from './Data';
import { Icon } from 'react-icons-kit'
import {chevronRight} from 'react-icons-kit/feather/chevronRight'
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft'
function App() {
  
 const [count,setCount]=useState(0)
const {id,name,job,comment,src}=data[count]
 

const check=(number)=>{
  if(number>data.length-1){
    return 0
  }
  if(number<0){
    return data.length-1
  }
  return number
}
const forward=()=>{
 setCount((count)=>{
  
  let newcount=count+1
  return  check(newcount)
  
 })
  
}
const back=()=>{
  setCount((count)=>{
   
   let newcount=count-1
   return  check(newcount)
   
  })
   
 }




  return (
    <div className="App" style={{height:"100vh"}}>
   <div className='container-fluid  bg row justify-content-center h-100  align-items-center  '>
  <div className='col-4 my-4 border border-3 shadow shadow-lg  d-flex flex-column align-items-center rounded-3  g-4 p-3 position-relative '>
  <div className='d-flex justify-content-between position-absolute   translate-middle-x ' style={{bottom:"10px",right:"10px"}}>
    <Icon  icon={chevronLeft} onClick={back} />
    <Icon  icon={chevronRight} onClick={forward} />
    </div>
   <img src={src} style={{borderRadius:"100%",width:120,height:120}} className=' my-3 '/>
   <h4 >{name}</h4>
   <span>{job}</span>
   <p className='py-4'>{comment}</p>

  </div>

   </div>
    </div>
  );
}

export default App;
