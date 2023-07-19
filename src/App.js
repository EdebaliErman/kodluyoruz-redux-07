import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './Components/Card';
import { randomCard, selectCards, selectPoint, reload, winCard, selectCardStatus } from './Redux/cardSlice';
import { useEffect } from 'react';
import Footer from './Components/Footer';

function App() {
  const cards = useSelector(selectCards)
  const point = useSelector(selectPoint)
  const status = useSelector(selectCardStatus)
  const dispacth = useDispatch()
 
  useEffect(() => {
    dispacth(randomCard())

  }, [dispacth])
  useEffect(() => {
    dispacth(winCard())

  }, [winCard(),dispacth])

  const handleReload = () => {
    dispacth(reload())
  }
  return (
    <div className="app">{
      <div>
        {status === "lose" ?
          <div className='failed'>
            <h1>Failed</h1>
            <button onClick={() => handleReload()}>Reload</button>
          </div>
          : status === "win" ?
            <div className='win'>
              <div>
                <h3>You won perfect</h3>
                <button onClick={() => handleReload()}>Restart</button>
              </div>
              <h1>Point :{point}</h1>
            </div>
            : < div >
              <h1 className='headName'>CARD GAME</h1>
              <h1>Point :{point}</h1>
              <div className='playground'>
                {cards.map((framework, key) => <Card
                  key={key}
                  framework={framework}
                />)}
              </div>
            </div>
        }
      </div>
    }
      <div>
      </div>
      <Footer />
    </div >
  );
}

export default App;
