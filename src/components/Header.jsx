import React from 'react'
// import "../Styles/Header.scss"
import Logo from '../images/GitHub-Mark-64px.png'

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} class="logo" alt="GitHub-Logo" />
        <ul className="left">
          <li>
            <a className="home" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="faq" href="https://octodex.github.com/faq/">
              FAQ
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="follow" href="https://twitter.com/githubdesign">
              Follow us on Twitter
            </a>
          </li>
          <li>
            <a className="git" href="https://github.com/">
              Back to Github.com
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
