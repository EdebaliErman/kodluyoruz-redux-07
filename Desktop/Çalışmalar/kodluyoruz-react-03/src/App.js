
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Ali")
  const [age, setAge] = useState(29)
  const [friends, setFriends] = useState(["Ahmet", "Murat"])
  const [adress, setAdress] = useState({ title:"İstanbul", zip:132 })
  return (


    < div className="App" >
      <h1>Hoşgeldiniz  {name} Bey </h1>
      <h1>{age}</h1>



      <button onClick={() => setName("Edebali")}>Chancge Name </button>
      <button onClick={() => setAge(24)}>Chancge  Age</button>

      {
        friends.map((frend, index) => (<div key={index}>{frend}</div>))
      }
      <button onClick={() => setFriends(["Erman", ...friends])}>Add Name</button>
      <hr></hr>
      <div>{adress.title} {adress.zip}</div>
      <button onClick={() => setAdress({ title: "Ankara" , zip:123 })}>New Adress</button>
    </div >
  );
}

export default App;
