import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Header from '../../components/atoms/Header'

import './Details.css'

interface CardType {
  userId: number
  id: number
  title: string
  body: string
}

const Details = () => {
  const [card, setCard] = useState<CardType | null>(null)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get<CardType>(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        )
        setCard(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : card ? (
        <>
          <Header name={'learner'} />
          <div className="cardDetails">
            <div className="content">
              <p>
                <span>Id: </span>
                {card.id}
              </p>
              <p>
                <span>User ID: </span>
                {card.userId}
              </p>
              <p>
                <span>Title:</span>
                {card.title}
              </p>
              <p>
                <span>Body: </span>
                {card.body}
              </p>
            </div>
          </div>
        </>
      ) : (
        <h2>No data available</h2>
      )}
    </>
  )
}

export default Details
