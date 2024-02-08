import React from 'react'
import Logo from '../../assets/logo.svg'
import Dollar from '../../assets/icon-dollar.svg'
import Person from '../../assets/icon-person.svg'
import Input from './input/Input'
import Select from './select/Select'
import Result from './result/Result'


function Card() {
  return (
    <main>
          <img className='logo' src={Logo} alt="logo" />
          <div className="main__wrapper">
      
        <Input
          labelName="Bill"
          imgSrc={Dollar}
        />
        
        <Select />
              
        <Input
          labelName="Number of People"
          imgSrc={Person}
        />
      
        <Result />
        
          </div>
    </main>
  )
}

export default Card
