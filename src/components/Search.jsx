import React, { useState } from 'react'
import axios from 'axios'
import '../styles/Search.scss'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForKittehs = async () => {
    const resp = await axios.get(
      `http://sdg-octodex.herokuapp.com?searchTerm=${searchTerm}`
    )
    setResults(resp.data.name)
  }

  return (
    <>
      <div className="search-bar-container">
        <section className="search-bar">
          <input
            type="search"
            className="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>
        <button onClick={searchForKittehs}>Search</button>
      </div>
    </>
  )
}

export default Search
