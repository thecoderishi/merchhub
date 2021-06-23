import React from 'react'
import LazyLoad, { lazyload } from 'react-lazyload'
import img1 from '../img/slide1.png'
import img2 from '../img/slide2.png'

const Carousel = () => {
  return (
    <>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
          ></li>
          <li
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
          ></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <a href='/mobilecover'>
              <LazyLoad>
                <img
                  src={`${img1}`}
                  style={{ height: '550px' }}
                  className='d-block w-100'
                  alt='...'
                />
              </LazyLoad>
              <div className='carousel-caption'>
                <h1>Mobile Covers</h1>
                <p>
                  An Amazing Place To Shop
                  <span className='fw-bold' style={{ color: 'black' }}>
                    Merch.
                  </span>
                </p>
              </div>
            </a>
          </div>

          <div className='carousel-item'>
            <a href='/tshirt'>
              <lazyLoad>
                <img
                  src={`${img2}`}
                  style={{ height: '550px' }}
                  className='d-block w-100'
                  alt='...'
                />
              </lazyLoad>
              <div className='carousel-caption'>
                <h1>Tshirts</h1>
                <p>
                  An Amazing Place To Shop
                  <span className='fw-bold' style={{ color: 'white' }}>
                    Merch.
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleCaptions'
          role='button'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleCaptions'
          role='button'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </a>
      </div>
    </>
  )
}
export default Carousel
