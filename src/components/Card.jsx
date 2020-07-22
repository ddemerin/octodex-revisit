import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
            <section>
              {kittehs.map((cat) => {
                return (
                  <div>
                    <li class="kittehs">
                      <img src={cat.image} alt={cat.alt} />
                    </li>
                    <p>
                      {cat.number}: <span>{cat.name}</span>
                      <section className="authors">
                        {cat.authors.map((author) => {
                          return (
                            <a href={author.link}>
                              <img
                                src={author.image}
                                className="icon"
                                alt="author"
                              />
                            </a>
                          )
                        })}
                      </section>
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
