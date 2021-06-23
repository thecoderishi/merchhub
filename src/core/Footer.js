import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='container'>
          <ul className='foote_bottom_ul_amrc'>
            <li>
              <Link to='/'>Tshirt</Link>
            </li>
            <li>
              <Link to='/mobilecover'>Mobile Cover</Link>
            </li>
            <li>
              <Link to='/tshirt'>Tshirt</Link>
            </li>
          </ul>
          <p className='text-center'>Copyright @2021 | Merchistan</p>

          <ul className='social_footer_ul'>
            <li>
              <a href='#'>
                <i className='fab fa-facebook-f'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default withRouter(Footer)
