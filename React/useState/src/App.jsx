// import React, { useState } from 'react'

// const App = () => {
//   let [count,setCount] = useState(0)
//   const addCount = ()=>{
//     setCount(++count)
//     console.log(count);    
//   }
//   return (
//     <div className='App'>
//       <button onClick={addCount}>Add to Cart{count}</button>
//     </div>
//   )
// }

// export default App




import React, { useState } from 'react'

const App = () => {
  const arr = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]
  const option = [5,10,15,20]
  const [dropDown,setDropDown] = useState(5)
  const showData = (e)=>{
    setDropDown(e.target.value)
    
  }
  return (
    <div className='App'>
      <select onChange={showData}>
        {option.map((x)=>(
          <option>{x}</option>
        ))}
      </select>
      {arr.slice(0,dropDown).map((item)=>(
        <p>{item}</p>
      ))}
    </div>
  )
}

export default App