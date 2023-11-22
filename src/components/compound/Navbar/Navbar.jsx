// import React from 'react'
// import PropTypes from 'prop-types'

import Button from "../../UI/Button/Button"
import send from '../../../assets/send.svg'
const Navbar = () => {
  return (
    <div>
        <Button style={{color: '#0E441D',display:'flex', alignItems:'center', gap:'8px', background: '#A8E88A', border: '1px solid #A8E88A'}}>
            <img src={send}/>
            <p>Send email</p>
        </Button>
    </div>
  )
}

// Navbar.propTypes = {}

export default Navbar