import React from 'react'

function SearchItem({searchWord, setSearchWord}) {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault}>
        <label htmlFor="Search-item">Search Item</label>
        <input 
            type="text"
            placeholder='Search Item'
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)} 
        />
    </form>
  )
}

export default SearchItem