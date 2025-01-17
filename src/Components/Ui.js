import React, { useState } from 'react'

const Ui = ({curElem}) => {
  const [data, setData] = useState(false);

  const showHide = () =>{
    setData(!data);
  }
   
  return (
    <>
        <div className='accordian'>
            <div className='qns'>
                <button onClick={showHide}>{data ? "-": "+" }</button>
                <h3>{curElem.q}</h3>
            </div>
            <p>{data ? curElem.ans : ""}</p>
        </div>
    </>
    
  )
}

export default Ui
