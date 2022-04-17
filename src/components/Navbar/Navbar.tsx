import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar__logo-title'>
        <Link className='navbar__home-link' to='/'>
          <img
            src={'https://cdn.iconscout.com/icon/free/png-256/ubiquiti-2752044-2284861.png'}
            className="navbar__logo"
            alt=""
          />
        </Link>
        <p className='navbar__title'>Devices</p>
      </div>
      <p className='navbar__author' >
        <a
          href='https://github.com/a-poco'
          target="_blank"
          rel="noreferrer"
          className='navbar__author'>
          Author/Cristina Salazar
        </a>
      </p>
    </header>
  )
}

export default Navbar;