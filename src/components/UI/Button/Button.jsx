import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const Button = ({ onClick, children, style }) => {
  return (
    <button onClick={onClick} style={style} className={styles.DefaultButtonStyle}>
    {children}
  </button>
  )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    style: PropTypes.object,
  };
export default Button