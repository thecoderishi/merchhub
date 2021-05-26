import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../style.css'
import logo from '../img/logo.svg'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#FFFFFF' }
  } else {
    return { color: '#B8B8B8' }
  }
}

const Menu = ({ history }) => (
  <>
    <div
      style={{
        position: 'relative',
        backgroundColor: '#f1f1f1',
        borderBottom: '2px solid #000',
        borderTop: '2px solid #000',
      }}
    >
      <Link style={currentTab(history, '/')} to='/'>
        <img
          src={logo}
          alt=''
          style={{
            width: '30px',
            height: '30px',
            margin: '5px 15px',
          }}
        />
      </Link>
      <div id='mySidenav' className='sidenav'>
        <a
          href='javascript:void(0)'
          className='closebtn'
          onClick={() => {
            document.getElementById('mySidenav').style.width = '0px'
          }}
        >
          &times;
        </a>
        <li>
          <Link style={currentTab(history, '/')} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link style={currentTab(history, '/mobilecover')} to='/mobilecover'>
            Mobile Cover
          </Link>
        </li>
        <li>
          <Link style={currentTab(history, '/tshirt')} to='/tshirt'>
            Tshirt
          </Link>
        </li>
      </div>
      <span
        style={{
          fontSize: '30px',
          cursor: 'pointer',
          paddingRight: '15px',
          float: 'right',
        }}
        onClick={() => {
          document.getElementById('mySidenav').style.width = '250px'
        }}
      >
        &#9777;
      </span>
    </div>
  </>
)

export default withRouter(Menu)
{
  /* <div className='menu'>
    <ul className='nav nav-tabs bg-dark'>
      <li className='nav-item'>
        <Link style={currentTab(history, '/')} className='nav-link' to='/'>
          Merchistan
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          style={currentTab(history, '/mobilecover')}
          className='nav-link'
          to='/mobilecover'
        >
          Mobile Cover
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          style={currentTab(history, '/tshirt')}
          className='nav-link'
          to='/tshirt'
        >
          Tshirt
        </Link>
      </li>
    </ul>
  </div> */
}
