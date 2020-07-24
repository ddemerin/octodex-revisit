import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <Footer />
      </>
    )
  }
}

export default App
