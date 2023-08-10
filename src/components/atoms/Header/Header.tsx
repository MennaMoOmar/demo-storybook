import React from 'react'

import logo from '../../../assets/logo.png'

import './Header.css'

interface MyComponentProps {
  name: string
}

const Header: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div className="header">
      <img className='image' src={logo} alt="storybook" />
      <p>Hi, {name}!</p>
    </div>
  )
}

export default Header
