import React from 'react'
import styled from 'styled-components'
import { SlideSection } from '../../components/Slider'
import { GAMES } from '../../games'
import { GameCard } from './GameCard'
import { WelcomeBanner } from './WelcomeBanner'

export function GameSlider() {
  return (
    <SlideSection>
      {GAMES.map((game) => (
        <div key={game.id} style={{ width: '160px', display: 'flex' }}>
          <GameCard game={game} />
        </div>
      ))}
    </SlideSection>
  )
}

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    color: black;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

export function GameGrid() {
  return (
    <Grid>
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  )
}

export default function Dashboard() {
  return (
    <>
      <WelcomeBanner />
      <h2 style={{ textAlign: 'center', textColor: '#ff0000' }}>Space</h2>
      <h2 style={{ textAlign: 'center' }}>Games</h2>
      <GameGrid />
    </>
  )
}
