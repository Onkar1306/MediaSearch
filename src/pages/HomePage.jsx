import React from 'react'
import Search from '../components/Search'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'

import NavBar from '../components/NavBar'
const HomePage = () => {
  return (
    <div>

    <NavBar/>

      <Search/>

      <Tabs/>

      <ResultGrid/>

    </div>
  )
}

export default HomePage
