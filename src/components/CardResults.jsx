import React from 'react'
import '../styles/Card.scss'

const CardResults = (props) => {
  const { results } = props
  console.log(results)

  return (
    <>
      <main>
        <ul>
          <section className="card">
            {results.map((results) => {
              return (
                <div>
                  <li class="kittehs">
                    <img
                      className="kittehImage"
                      src={results.image}
                      alt={results.alt}
                    />
                  </li>
                  <div className="description">
                    <section className="resultsName">
                      #{results.number}: <span>{results.name}</span>
                    </section>
                    <section className="authors">
                      {results.authors.map((author) => {
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
                  </div>
                </div>
              )
            })}
          </section>
        </ul>
      </main>
    </>
  )
}

export default CardResults
