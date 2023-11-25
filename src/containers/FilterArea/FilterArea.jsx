import React from 'react'
import SearchBox from '../../components/searchBox/SearchBox'

const FilterArea = () => {
  return (
    <div className='filter__area py-4 bg-body-secondary mt-4'>
      <div className="container">
        <SearchBox/>
      </div>
    </div>
  )
}

export default FilterArea
