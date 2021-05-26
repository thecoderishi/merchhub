import React from 'react'
import '../style.css'
import '../img/01.png'

const Card = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card block'>
              <div className='product-img'>
                <img src='01.png' class='card-img' alt='' />
              </div>
              <div className='card-body'>
                <div className='product-text'>
                  <h1>Product Name</h1>
                  <h2>Sold By</h2>
                  <p className='card-text'>Model Name (Drop Down)</p>
                  <p>Type</p>
                </div>
                <div className='product-price-btn'>
                  <p>
                    <span className='mrp'>MRP</span>Price
                  </p>
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card
