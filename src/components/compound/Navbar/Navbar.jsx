// import React from 'react'
// import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'

import Button from "../../UI/Button/Button"
import send from '../../../assets/send.svg'
import github from '../../../assets/github.svg'
import linkedin from '../../../assets/linkedin.svg'
import twitter from '../../../assets/twitter.svg'

const Navbar = () => {
  return (
    <div className={styles.NavbarWrapper}>
        <div className={styles.Navbar}>
            <span>
                <h2 className={styles.logo}>Victor</h2>
            </span>
            <section className={styles.socialsSection}>
                <img src={github}/>
                <img src={linkedin}/>
                <img src={twitter}/>
            </section>
            <Button style={{color: '#0E441D',display:'flex', alignItems:'center', gap:'8px', background: '#A8E88A', border: '1px solid #A8E88A',}}>
                <img src={send}/>
                <p>Send email</p>
            </Button>
        </div>
    </div>
  )
}

// Navbar.propTypes = {}

export default Navbar