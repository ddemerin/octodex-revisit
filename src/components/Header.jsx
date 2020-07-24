import React from 'react'
import '../styles/Header.scss'
import Logo from '../images/GitHub-Mark-64px.png'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="left">
          <img src={Logo} className="logo" alt="GitHub-Logo" />
          <li>
            <a className="octo" href="/">
              Octodex
            </a>
          </li>
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
        <ul className="right">
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

export default Header
