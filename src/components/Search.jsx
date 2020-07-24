import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import CardResults from '../components/CardResults'
import axios from 'axios'
import '../styles/Search.scss'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [kittehs, setKittehs] = useState([{ authors: [] }])
  const [results, setResults] = useState([])
  console.log(kittehs)

  useEffect(() => {
    const loadKittehs = async () => {
      const resp = await axios.get('http://sdg-octodex.herokuapp.com')
      setKittehs((prevKittehs) => {
        prevKittehs = resp.data.data
        return prevKittehs
      })
    }
    loadKittehs()
  }, [])

  const searchForKittehs = async () => {
    const test = kittehs.filter((kitteh) => {
      return kitteh.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setResults(test)
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
      <section className="cards-container">
        <ul className="cards">
          {results.length > 0 ? (
            results.map((results) => {
              return <CardResults results={results} />
            })
          ) : (
            <Card kittehs={kittehs} key={kittehs.id} />
          )}
        </ul>
      </section>
    </>
  )
}

export default Search
