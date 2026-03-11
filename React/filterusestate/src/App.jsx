// import React, { useState } from 'react'

// const App = () => {
//   const[search,setSearch] = useState("")

//   const users = [
//     {id:1,name:"Arun"},
//     {id:2,name:"Ajay"},
//     {id:3,name:"Bala"},
//     {id:4,name:"Charles"},
//     {id:4,name:"John"},
//   ]

//   const filterUser = (e)=>{
//     setSearch(e.target.value)
//   }

//   const filteredUser = users.filter((user)=>{
//     return user.name.toLowerCase().includes(search.toLowerCase())
//   })
//   return (
//     <div className="App">
//       <input type='text' placeholder='searchName' onChange={filterUser}></input>

//       {filteredUser.map((user)=>(
//         <p>{user.name}</p>
//       ))}
//     </div>
//   )
// }

// export default App




import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [bg,setBg] = useState("dark")
  const bgChange = ()=>{
    setBg(bg==="dark"?"light":"dark")
  }
  return (
    <div className='App' style={{width:"1700px",height:"100vh",backgroundColor:bg==="dark"?"black":"white",color:"white"}}>
      <button style={{backgroundColor:bg==="dark"?"white":"black",color:bg==="dark"?"black":"white"}} onClick={bgChange}>{bg}</button>
      <h1 className='h1'>Hello</h1>
    </div>
  )
}

export default App