import React from 'react'
import Button from './button/Button'

function Select() {
    const buttonValues = [
        5, 10, 15, 25, 50
    ];
  return (
    <>
        <label className='main-label'>Select Tip %</label>
        <div className="button-wrapper">
              {buttonValues.map((button) => <Button value={button} />)}
              <input className="custom-input" type="text" placeholder='Custom'/>
        </div> 
    </>
  )
}

export default Select
