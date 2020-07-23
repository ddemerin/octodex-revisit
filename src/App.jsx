import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Card from './components/Card'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <Card />
        <Footer />
      </>
    )
  }
}

export default App
