import React from 'react'
import style from '../style/searchbar.module.css'

function Search() {
  return (
    <div className={style.search}>
        <input placeholder='Search Here'/>
        <button>Search</button>
    </div>
  )
}

export default Search;