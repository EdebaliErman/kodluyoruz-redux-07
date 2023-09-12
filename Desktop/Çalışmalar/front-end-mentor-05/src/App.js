import React from 'react'
import Card from './Components/Card/Card'
import { data } from './Data/data'

function App() {
  
  return (
    <div>
      <Card
      img={data.headerImg}
      music={data.music}
      headText={data.headText}
      paragraph={data.paragraph}
      cardHead={data.cardHead}
      cardMoney={data.cardMoney}
      cardLink={data.cardLink}
      buttonText={data.buttonText}
      canselButton={data.canselButton}
      />
    </div>
  )
}

export default App

