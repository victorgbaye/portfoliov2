// import React from 'react'
// import PropTypes from 'prop-types'

import Navbar from "../../components/compound/Navbar/Navbar"
import styles from './Home.module.scss'
import arrowdown from '../../assets/arrowdown.svg'
import Project from "../../components/compound/Project/Project"
const Home = () => {
  return (
    <div>
        <section className={styles.HeroSection}>
            <Navbar/>
            <div className={styles.HeroMain}>
                <h1>Software Developer</h1>
                <p>It's also important to make sure that the font aligns with the overall design system of the website for consistency. Additionally, Figma allows you to import fonts, so you're not limited to the default selection if you have a specific typeface in mind that isn't available in Figma by default.</p>
            </div>
            <img src={arrowdown}/>
        </section>
        <section>
            <Project/>
        </section>
    </div>
  )
}

// Home.propTypes = {}

export default Home