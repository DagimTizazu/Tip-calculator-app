import React from 'react'

function Amount({ amountLabel, resultValue }) {
  return (
      <div className='result-amount'>
          <div className="label-container">
              <p className='result-label'>{amountLabel}</p>
              <p className='per-label'>/ person</p>
          </div>
          <p className='result-value'>{resultValue}</p>
    </div>
  )
}

export default Amount
