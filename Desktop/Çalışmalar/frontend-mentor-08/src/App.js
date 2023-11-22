import './App.css';
import Card from './Components/Card/Card';
import { svgData } from './Components/Svg/SvgData';

function App() {
  return (
    <div className="App">
      <span className='z-0 flex justify-start items-start mb-96 opacity-60 '>{svgData.top}</span>
      <Card  />
      <span className='z-0 rotate-[270deg]   flex justify-end items-end mt-96 opacity-60  '> {svgData.top}</span>
    </div>
  );
}

export default App;
