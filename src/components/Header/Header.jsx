import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';




const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='header'>

      <img src={Logo} className='logo' alt='' />
      {(menuOpened === false && mobile === true) ?
        (<div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
          }
          }

          onClick={() => setMenuOpened(true)}
        ><img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} /></div>) :
        (
          <ul className='header-menu'>
            <li><link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to='header'
              spy={true}
              smooth={true}
            >Home</link></li>
            <li><link
              onClick={() => setMenuOpened(false)}
              to='programs'
              spy={true}
              smooth={true}
            >Programs</link></li>
            <li><link
              onClick={() => setMenuOpened(false)}
              to='reasons'
              spy={true}
              smooth={true}
            >Why us</link></li>
            <li><link
              onClick={() => setMenuOpened(false)}
              to='plans'
              spy={true}
              smooth={true}
            >Plans</link></li>
            <li><link
              onClick={() => setMenuOpened(false)}
              to='testimonials'
              spy={true}
              smooth={true}
            > Testimonials</link> </li>
          </ul>

        )}

    </div>
  );
};

export default Header  