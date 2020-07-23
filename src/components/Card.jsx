import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Card.scss'

const Card = () => {
  const [kittehs, setKittehs] = useState([{ authors: [] }])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadKittehs = async () => {
      const resp = await axios.get('http://sdg-octodex.herokuapp.com')
      setKittehs((prevKittehs) => {
        prevKittehs = resp.data.data
        return prevKittehs
      })
      setIsLoaded(true)
    }
    loadKittehs()
  }, [])

  if (isLoaded) {
    return (
      <>
        <main>
          <ul>
            <section className="card">
              {kittehs.map((cat) => {
                return (
                  <div>
                    <li class="kittehs">
                      <img
                        className="kittehImage"
                        src={cat.image}
                        alt={cat.alt}
                      />
                    </li>
                    <p>
                      <section className="catName">
                        #{cat.number}: <span>{cat.name}</span>
                      </section>
                      {cat.authors.map((author) => {
                        return (
                          <section className="authors">
                            <a href={author.link}>
                              <img
                                src={author.image}
                                className="icon"
                                alt="author"
                              />
                            </a>
                          </section>
                        )
                      })}
                    </p>
                  </div>
                )
              })}
            </section>
          </ul>
        </main>
      </>
    )
  } else {
    return <div>Loading Kittehs...</div>
  }
}

export default Card
