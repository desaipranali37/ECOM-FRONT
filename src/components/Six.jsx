import React, { useState } from 'react'

const Six = () => {
    const [input,setInput] = useState("")
  return (
    <div>
      <input type="text"
      onChange={(event)=>setInput(event.target.value)} />
      <p>{input}</p>
    </div>
  )
}

export default Six
