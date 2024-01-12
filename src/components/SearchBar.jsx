import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <>
        <form action="http://google.com/search" target="_blank" className='searchContainer'>
            <input name="q" className='searchBar' placeholder='i love searching things on google.com'/>
            <button type="submit" className='search'><CiSearch/></button>
        </form>
    </>
  )
}

export default SearchBar