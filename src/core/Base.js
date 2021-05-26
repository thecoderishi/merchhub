import React from 'react'
import Menu from './Menu'
import Footer from './Footer'

const Base = ({ children }) => (
  <div>
    <Menu />
    <div>
      <div>{children}</div>
    </div>
    <Footer />
  </div>
)

export default Base
