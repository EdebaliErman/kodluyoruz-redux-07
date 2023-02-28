
import './App.css';
import User from './components/User';

const friends = [
  {
    id: 1,
    name: "Ali"
  },
  {
    id: 2,
    name: "Mehmet"
  }
  ,
  {
    id:3,
    name: "Mehmet"
  }
  ,
  {
    id: 4,
    name: "Aslı"
  }
  ,
  {
    id: 5,
    name: "Zeynep"
  }
]

function App() {
  return (
    <>
      <h1>
        <User
          name="Edebali"
          surname="Erman"
          isLoggedIn={true}
          age={24}
          friends={friends}
        />
      </h1>

    </>
  );
}

export default App;
