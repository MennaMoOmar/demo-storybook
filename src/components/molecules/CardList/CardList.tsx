import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../../atoms/Card'

import './CardList.css'

interface CardType {
  userId: number
  id: number
  title: string
  body: string
}

const CardList = () => {
  const [cards, setCards] = useState<CardType[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get<CardType[]>(
          'https://jsonplaceholder.typicode.com/posts',
        )
        setCards(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  return (
    <div className="cardList">
      {loading ? (
        <h2>Loading...</h2>
      ) : cards ? (
        cards.map((card: CardType) => (
          <div key={card.id}>
            <Card {...card} />
          </div>
        ))
      ) : (
        <h2>No data available</h2>
      )}
    </div>
  )
}

export default CardList
