import React, { useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import RecipesGrid from './RecipesGrid'
import './styles.scss'

export default function RecipesByClass(props) {
  const {cards} = props
  
  if(!cards.length) return null
  return(
      <Container maxWidth='xl'>
        {cards.map(card => (
          <div key={card._id}>
            <h2>{card._id}</h2>
            <RecipesGrid list={card.list} />
          </div>
        ))}
      </Container>
  )
}