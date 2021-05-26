import React, { useState } from 'react'
import Base from './Base'
import { teesdata } from '../tshirt/tshirtAPI'
import SpecificProduct from './TshirtCard'
import '../style.css'
// import bgimg from '../img/comingsoon.png'

const Tshirt = () => {
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState(teesdata)

  // exclude column list from filter
  const excludeColumns = ['id', 'mrp', 'price', 'itemNumber']

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value)
    filterData(value)
  }

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim()
    if (lowercasedValue === '') setData(teesdata)
    else {
      const filteredData = teesdata.filter((item) => {
        console.log(value)
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        )
      })
      setData(filteredData)
    }
  }

  return (
    <div>
      <Base>
        <form className='searchbar'>
          <input
            type='search'
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
        <div className='container'>
          <div className='row'>
            {data.map((product, index) => {
              return (
                <div className='col-sm-4'>
                  <SpecificProduct key={product.id} {...product} />
                </div>
              )
            })}
          </div>
          <div>{data.length === 0 && <span>No Tshirt found!</span>}</div>
        </div>
      </Base>
    </div>
  )
}
export default Tshirt
