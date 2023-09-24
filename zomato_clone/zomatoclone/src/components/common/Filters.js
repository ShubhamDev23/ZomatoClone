import React from 'react'
import "./filters.css";
import FilterItem from './filterItem/FilterItem';

const Filters = ({FilterList}) => {
  return (
    <div>
        <div className='filters'>
            {FilterList && FilterList.map((filter)=>{
                return <FilterItem filter={filter} key={filter.id}/>
            })}
        </div>
    </div>
  )
}

export default Filters
