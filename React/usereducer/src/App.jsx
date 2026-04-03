// import React, { useState } from 'react'

// const App = () => {
//   const [count,setCount] = useState(0)
//   const [bg,setBg] = useState("dark")
//   const [option,setOption] = useState("Java")
//   return (
//     <div className='App'>
//       <button onClick={()=>{setCount((prev)=>++prev)}}>{count}</button>
//       <button onClick={()=>{setBg(bg==="dark"?"light":"dark")}}>{bg}</button>
//       <select onChange={(e)=>{setOption(e.target.value)}}>
//           <option>Java</option>
//           <option>Python</option>
//           <option>PHP</option>
//       </select>
//       <p>{option}</p>
//     </div>
//   )
// }

// export default App

import React, { useReducer } from "react";



const App = () => {
  const reducer = (state,action)=>{
    switch(action.x){
      case "count":
        return {...state,count:state.count+1}
      case "color":
        return {...state,bg:state.bg==="dark"?"light":"dark"}
      case "course":{
        return {...state,option:action.value}
      }
    }

  }
  const[state,dispactch] = useReducer(reducer,{count:0,bg:"dark","option":"Java"})
  return (
    <div className="App">
      <button onClick={()=>{dispactch({x:"count"})}}>{state.count}</button>
      <button onClick={()=>{dispactch({x:"color"})}}>{state.bg}</button>
      <select onChange={(e)=>{dispactch({x:"course",value:e.target.value})}}>
        <option>Java</option>
        <option>Python</option>
        <option>PHP</option>
      </select>
      <p>{state.option}</p>
    </div>
  );
};

export default App;
