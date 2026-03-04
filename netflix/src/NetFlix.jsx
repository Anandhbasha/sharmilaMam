import React from 'react'

const NetFlix = ({Name,Quality,Price,Vq,Resolution,Devices,Watch,Download,color}) => {
  return (
    <div className='NetFlix' style={{textAlign:"left"}}>
        <div className='devices' style={{background: "linear-gradient(to right, #2193b0, #6a11cb)",borderRadius:"15px",color:"white",padding:"2.5%",width:"95%"}}>
            <h2 style={{margin:"-2px"}}>{Name}</h2>
            <h4 style={{margin:"0px"}}>{Quality}</h4>
        </div>
        <div className='card_Body'>
            <p>Monthly price<br></br>Rs.{Price}</p><hr></hr>
            <p>Video and sound Quality<br></br>{Vq}</p><hr></hr>
            <p>Resolution<br></br>{Resolution}</p><hr></hr>
            <p>Supported Devices<br></br>{Devices}</p><hr></hr>
            <p>Watch at the same time{Watch}</p><hr></hr>
            <p>Download devices:{Download}</p>
            <hr />            
        </div>
    </div>
  )
}
export default NetFlix