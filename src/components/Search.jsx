import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import '../styles/Search.scss'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [kittehs, setKittehs] = useState([{ authors: [] }])
  const [results, setResults] = useState([])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchForKittehs()
    }
  }

  useEffect(() => {
    const loadKittehs = async () => {
      const resp = await axios.get('http://sdg-octodex.herokuapp.com')
      setKittehs((prevKittehs) => {
        prevKittehs = resp.data.data
        return prevKittehs
      })
      setLoading(true)
    }
    loadKittehs()
  }, [])

  const searchForKittehs = async () => {
    const test = kittehs.filter((kitteh) => {
      return kitteh.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setResults(test)
  }

  if (loading) {
    return (
      <>
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="search"
              className="search"
              value={searchTerm}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={searchForKittehs}>Search</button>
        </div>
        <div className="cards-container">
          {results.length > 0 ? (
            <Card kittehs={results} />
          ) : (
            <Card kittehs={kittehs} />
          )}
        </div>
      </>
    )
  } else {
    return <p className="loading">Loading...</p>
  }
}

export default Search
