import React, { useEffect, useState } from 'react';
import './App.css'; // Archivo CSS para estilos

export default function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
   
    // Llamada a la API con CORS
    fetch('https://random-d.uk/', { mode: 'cors' })
      .then((res) => {
        if (!res.ok) {
          throw new Error('No se pudo obtener la data');
        }
        return res.json();
      })
      .then((data) => setArtworks(data.data))
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div className="App">
      <h1>Patitos</h1>
      <button onClick={() => window.location.reload()}>Recargar</button>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </div>
  );
}
