import React from 'react'
import '../styles/Card.scss'

const Card = (props) => {
  const { kittehs } = props

  return (
    <>
      <main>
        <ul>
          <section className="card">
            {kittehs.map((cat) => {
              return (
                <div>
                  <li className="kittehs">
                    <img
                      className="kittehImage"
                      src={cat.image}
                      alt={cat.alt}
                    />
                  </li>
                  <div className="description">
                    <div>
                      #{cat.number}: <span>{cat.name}</span>
                    </div>
                    <div className="authors">
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
                    </div>
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

export default Card
