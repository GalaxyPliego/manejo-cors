import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const jsonData = await response.json();
      setData(jsonData.fact);
      console.log(data)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Datos sobre gatos ^.^
        </p>
        <button onClick={fetchData}>Obtener datos</button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </header>
    </div>
  );
}

export default App;
