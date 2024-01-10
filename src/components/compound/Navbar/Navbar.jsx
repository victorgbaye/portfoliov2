import  {useState, useEffect} from 'react'
// import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'

import Button from "../../UI/Button/Button"
import send from '../../../assets/send.svg'
import github from '../../../assets/github.svg'
import linkedin from '../../../assets/linkedin.svg'
import twitter from '../../../assets/twitter.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [isHamburgerOpen, setIssHamburgerOpen] = useState(false)
    useEffect(() => {
        const body = document.querySelector('body');
        if (isHamburgerOpen) {
          body.style.overflow = 'hidden'; 
        } else {
          body.style.overflow = ''; 
        }
    
        return () => {
          body.style.overflow = '';
        };
      }, [isHamburgerOpen]);
    
  return (
    <>
        <div className={styles.NavbarWrapper}>
            <div className={styles.Navbar}>
                <span>
                    <h2 className={styles.logo}>tomiwadotJS</h2>
                </span>
                <section className={styles.socialsSection}>
                    <img src={github}/>
                    <img src={linkedin}/>
                    <img src={twitter}/>
                </section>
                <section className={styles.CTA}>
                    <Button style={{color: '#A8E88A',display:'flex', alignItems:'center', gap:'8px', background: 'none', border: 'none',fontSize: '16px'}}>
                        Resume
                    </Button>
                    <Button style={{color: '#0E441D',display:'flex', alignItems:'center', gap:'8px', background: '#A8E88A', border: '1px solid #A8E88A',}}>
                        <img src={send}/>
                        <p>Send email</p>
                    </Button>
                </section>
                <section className={styles.hamburger} onClick={()=>setIssHamburgerOpen(!isHamburgerOpen)}>
                    {isHamburgerOpen? <CloseIcon/> : <MenuIcon />}
                </section>
            </div>

        </div>
        {
            isHamburgerOpen &&
        <div className={styles.hamburgerMenu}>
            <p>Work</p>
            <p>Github</p>
            <p>Linkedin</p>
            <p>Twitter</p>
            <p>Resume</p>

        </div>
        }
    </>
  )
}

// Navbar.propTypes = {}

export default Navbar