import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import SizeGuide from './SizeGuide'

const TshirtCard = ({ img, name, creater, mrp, price, itemNumber }) => {
  const [size, setSize] = useState('')
  const handleselect = (e) => {
    setSize(e.target.value)
  }

  const [qtys, setQtys] = useState('')
  const handleqty = (e) => {
    setQtys(e.target.value)
  }

  const msg = `Hello! I want to purchase *${name} T-shirt* of size *${size}* for *${qtys} Quantity*, model number is *${itemNumber}*`
  const link = `https://wa.me/+918982893136?text=${msg}`

  const Size = ['Size', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

  const Qty = ['Qty', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
  }

  var fullDate = new Date()

  const delveryDate = fullDate.addDays(10)
  const date = delveryDate.getDate()
  const month = delveryDate.getMonth()
  const day = delveryDate.getDay()

  return (
    <div>
      <div className='card block'>
        <div className='product-img'>
          <LazyLoad>
            <img src={img} className='card-img' alt='' />
          </LazyLoad>
        </div>
        <div className='card-body'>
          <div className='product-text'>
            <h1 style={{ fontSize: '28px' }}>{name}</h1>
            <h2>By {creater}</h2>
            <p>Select Size for Tshirt</p>
            <div>
              <select className='select' value={size} onChange={handleselect}>
                {/* {options.map((option) =>
                  option.size.map((opt) => <option value={opt}>{opt}</option>)
                )} */}
                {Size.map((opt) => (
                  <option value={opt}>{opt}</option>
                ))}
              </select>
              <span>
                <select className='select' value={qtys} onChange={handleqty}>
                  {Qty.map((qty) => (
                    <option value={qty}>{qty}</option>
                  ))}
                </select>
                <SizeGuide />
                <a
                  type='button'
                  className='fw-bold'
                  data-toggle='modal'
                  data-target='#exampleModalCenter'
                  style={{
                    textDecoration: 'none',
                    color: '#474747',
                    marginLeft: '40px',
                  }}
                >
                  Size Guide
                </a>
              </span>
            </div>
            <div>
              <p>
                Colors{' '}
                <span>
                  <div
                    style={{
                      height: 'calc(100%)',
                      backgroundColor: 'rgb(97, 108, 194)',
                    }}
                  >
                    d
                  </div>
                </span>
              </p>
            </div>
          </div>
          <div className='product-text'>
            <p>
              Delivery By{' '}
              <span className=' fw-bold'>
                {date} {monthNames[month]}, {dayName[day]}
              </span>
              {' | '}
              <span>
                <span className=' fw-bold'>Free</span> Shiping
              </span>
            </p>
          </div>
          <div className='product-price-btn'>
            <p>
              <span className='mrp'>{mrp}</span>
              {price}
            </p>
            {size && qtys ? (
              <a href={link}>
                <button> Buy</button>
              </a>
            ) : (
              <button
                onClick={() => {
                  alert('Please Select Size and Quantity For Tshirt')
                }}
              >
                Buy
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default TshirtCard
