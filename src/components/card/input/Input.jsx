import React from 'react'


function Input({ labelName, imgSrc }) {
  return (
    <>
          <label className='main-label'>{labelName}</label>
          <br />
          
        <div className="main-input-wrapper">
            <div className="main-image-container"><img className='bill-image' src={imgSrc} alt="dollar sign" /></div>
            <input type="text" name='bill' className='bill-input' placeholder='0'></input>
        </div>
    </>
  )
}

export default Input
