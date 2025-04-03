import React from 'react'

const Child = ({name}) => {
  return (
    <div>
      <h2>hello {name}</h2>
    </div>
  )
}

const Third = () => {
    return(
        <div>
            <Child name="pranali"/>
        </div>
    )
}

export default Third
