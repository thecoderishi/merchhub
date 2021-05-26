import React, { useState } from 'react'
import Base from './Base'
import { coverdata } from '../mobileCover/mobileCoverAPI'
import SpecificProduct from './MobileCard'

const MobileCover = () => {
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState(coverdata)

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
    if (lowercasedValue === '') setData(coverdata)
    else {
      const filteredData = coverdata.filter((item) => {
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
        </div>
      </Base>
    </div>
  )
}
export default MobileCover
