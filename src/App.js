import React, { useEffect, useState } from 'react';
import './App.css'; 

export default function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch('https://random-d.uk/', { mode: 'cors' })
      .then((res) => {
        if (!res.ok) {
          throw new Error('No se pudo obtener la data');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Datos recibidos:', data);
        setArtworks(data.imágenes || []); // Usamos data.imágenes para obtener las imágenes o un array vacío si no hay datos
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div className="App">
      <h1>Patitos</h1>
      <button onClick={() => window.location.reload()}>Recargar</button>
      <ul>
        {artworks.map((artwork, index) => (
          <li key={index}>
            <img src={artwork} alt={`Imagen ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
