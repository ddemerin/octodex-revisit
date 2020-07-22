import React, { Component } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer.js'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Card />
        <Footer />
      </>
    )
  }
}

export default App
