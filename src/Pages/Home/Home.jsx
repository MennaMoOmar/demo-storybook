import React from 'react'
import Header from '../../components/atoms/Header'
import CardList from '../../components/molecules/CardList'

import './Home'

const Home = () => {
  return (
    <div className="home">
      <Header name={'learner'} />
      <div className="cardsList">
        <CardList />
      </div>
    </div>
  )
}

export default Home
