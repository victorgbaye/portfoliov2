// import React from 'react'
// import PropTypes from 'prop-types'

import Navbar from "../../components/compound/Navbar/Navbar"
import styles from './Home.module.scss'
// import arrowdown from '../../assets/arrowdown.svg'
import Project from "../../components/compound/Project/Project"
const Home = () => {
  return (
    <div>
        <section className={styles.HeroSection}>
            <Navbar/>
            <div className={styles.HeroMain}>
                <h1>{`Hello, I'm Victor`}</h1>
                <p>
                I specialize in creating captivating user interfaces and building APIs and distributed systems for web and digital products. 
                My focus is on delivering exceptional user experiences through seamless design and efficient, reliable backend solutions.
                </p>
            </div>
            {/* <img src={arrowdown} className={styles.bounce}/> */}
        </section>
        <section >
            <Project/>
        </section>
    </div>
  )
}

// Home.propTypes = {}

export default Home