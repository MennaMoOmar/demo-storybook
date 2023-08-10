import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Button, { ButtonProps } from '../Button'

import './Card.css'

export interface CardType {
  userId: number
  id: number
  title: string
  body: string
}

const Cards = ({ ...cardProps }) => {
  const [cards, setCards] = useState<CardType[] | null>(null)
  const navigate = useNavigate()

  const addButton: ButtonProps = {
    inverse: false,
    status: 'primary',
    size: 'medium',
    // backgroundColor: '',
    label: 'Details',
  }

  const removeButton: ButtonProps = {
    inverse: false,
    status: 'danger',
    size: 'medium',
    // backgroundColor: '',
    label: 'Remove',
  }

  const handleSeeDetailsClick = (id: number) => {
    navigate(`/cards/${id}`)
  }

  const handleRemoveClick = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setCards(cards && cards.filter((card: CardType) => card.id !== id))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <>
      {cardProps && (
        <div className="card" key={cardProps.id}>
          <div className="content">
            <h4>{cardProps.title}</h4>
            <p>{cardProps.body}</p>
          </div>
          <div className="buttons">
              <Button
                {...addButton}
                onClick={() => handleSeeDetailsClick(cardProps.id)}
              />
            <Button
              {...removeButton}
              onClick={() => handleRemoveClick(cardProps.id)}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Cards
