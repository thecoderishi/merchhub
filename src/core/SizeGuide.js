import React from 'react'
import img from '../img/sizeguide.jpg'

const SizeGuide = () => {
  return (
    <div
      class='modal fade'
      id='exampleModalCenter'
      tabindex='-1'
      role='dialog'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
    >
      <div class='modal-dialog modal-dialog-centered' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title fw-bold' id='exampleModalLongTitle'>
              Size Guide
            </h5>
            <button
              type='button'
              class='close'
              data-dismiss='modal'
              aria-label='Close'
              className='btn btn-lg'
            >
              {/* <span aria-hidden='true'>&times;</span> */}
              <i class='fas fa-times'></i>
            </button>
          </div>
          <div class='modal-body'>
            <img src={img} alt='' style={{ maxWidth: '100%' }} />
            <p>All measurements are of the garment. (In Inches)</p>
            <table class='table'>
              <thead class='table-active'>
                <tr>
                  <th scope='col'>Size</th>
                  <th scope='col'>Bust</th>
                  <th scope='col'>Length</th>
                  <th scope='col'>Sleeve Length</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>XS</th>
                  <td>38"</td>
                  <td>26"</td>
                  <td>5.25"</td>
                </tr>
                <tr>
                  <th scope='row'>S</th>
                  <td>40"</td>
                  <td>27"</td>
                  <td>5.50"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SizeGuide
