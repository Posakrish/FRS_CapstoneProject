import React from 'react'

function Header() {
const head={
       
       
    fontSize: '50px',
  

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius:'2%',
   padding:"0px",
    backgroundColor:' rgba(202, 226, 18, 0.724)',
   color:"brown",
   fontFamily:"cursive",
    marginBottom:"0px"
    
}

  return (
    <div>
        <div style={head}>Asian AirLines</div>
    </div>

  )
}

export default Header