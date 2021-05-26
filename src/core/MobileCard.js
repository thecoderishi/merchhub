import React, { useState } from 'react'
import { options } from './Models'
import LazyLoad from 'react-lazyload'

// const options = [
//   {
//     label: 'Select Model',
//     value: 'Select Model',
//   },
//   {
//     label: 'Redmi Note 9',
//     value: 'Redmi Note 9',
//   },
//   {
//     label: 'Redmi Note 9 Pro',
//     value: 'Redmi Note 9 Pro',
//   },
//   {
//     label: 'Redmi Note 9 Pro Max',
//     value: 'Redmi Note 9 Pro Max',
//   },
// ]

const MobileCard = ({ img, name, creater, mrp, price, itemNumber }) => {
  const [model, setModel] = useState('')
  const handleselect = (e) => {
    setModel(e.target.value)
  }

  const msg = `Hello! I want to purchase *${name}* mobile back cover for *${model}*, model number is *${itemNumber}*`
  const link = `https://wa.me/+918982893136?text=${msg}`

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
            <h1>{name}</h1>
            <h2>By {creater}</h2>
            <p>Select Your Mobile Model</p>
            <select
              className='form-select select'
              value={model}
              onChange={handleselect}
            >
              {/* {options.map((option) =>
                option.value.map((opt) => <option value={opt}>{opt}</option>)
              )} */}
              {options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className='product-text'>
            <p>
              Delivery By{' '}
              <span className=' fw-bold'>
                {date} {monthNames[month]}, {dayName[day]}
              </span>
              {' | '}
              <span>Free Shiping</span>
            </p>
          </div>
          <div className='product-price-btn'>
            <p>
              <span className='mrp'>{mrp}</span>
              {price}
            </p>

            {model ? (
              <a href={link} target='_blank'>
                <button> Buy</button>
              </a>
            ) : (
              <button
                onClick={() => {
                  alert('Please Select Mobile Model')
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
export default MobileCard
