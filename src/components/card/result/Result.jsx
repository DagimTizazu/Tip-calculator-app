import React from 'react'
import Amount from './amount/Amount'

function Result() {
  return (
    <div className='result-wrapper'>
          <Amount
              amountLabel={'Tip Amount'}
              resultValue={'$4.27'}
          />

          <Amount
              amountLabel={'Total'}
              resultValue={'$32.79'}
          />
          <button className='reset-button'>Reset</button>
    </div>
  )
}

export default Result
