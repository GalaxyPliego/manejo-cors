import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Función para cargar una imagen aleatoria al cargar la página
    loadRandomImage();
  }, []);

  const loadRandomImage = () => {
    axios
      .get("https://randomfox.ca/floof/")
      .then((response) => {
        // console.log("Respuesta de la API:", JSON.stringify(response, null, 2));
        setImageUrl(response.data.image);
      })
      .catch((error) => {
        console.error("Error al cargar la imagen:", error);
      });
  };

  console.log(imageUrl)
  return (
    <div className="App">
      <header className="App-header">
        <h1>🦊 Imagen Aleatoria de zorritos 🦊</h1>
        <img
          src={imageUrl}
          alt="Imagen aleatoria"
          style={{ height: "30rem", marginBottom: "2rem" }}
        />
        <br />
        <button onClick={loadRandomImage} style={{ padding: "1rem" }}>Cambiar Imagen</button>
      </header>
    </div>
  );
}

export default App;
