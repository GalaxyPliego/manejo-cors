import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("🦊 Imagen Aleatoria de zorritos 🦊");

  useEffect(() => {
    // Función para cargar una imagen aleatoria al cargar la página
    loadRandomImage();
  }, []);

  const loadRandomImage = () => {
    axios
      .get("https://randomfox.ca/floof/")
      .then((response) => {
        // console.log("Respuesta de la API:", JSON.stringify(response, null, 2));
        setTitle("🦊 Imagen Aleatoria de zorritos 🦊");
        setImageUrl(response.data.image);
      })
      .catch((error) => {
        console.error("Error al cargar la imagen:", error);
      });
  };

  const loadRandomImageCORS = () => {
    axios
      .get("http://localhost:3000/proxy/duck")
      .then((response) => {
        // console.log("Respuesta de la API:", JSON.stringify(response, null, 2));
        setTitle("🦆 Imagen Aleatoria de Patitos 🦆");
        setImageUrl(response.data.url);
        console.log(response)
      })
      .catch((error) => {
        console.error("Error al cargar la imagen:", error);
        if (error.name === 'AxiosError' && error.message === 'Network Error') {
          alert('Error de CORS, no se puede acceder a la API')
        } else {
          alert('Error desconocido')
        }
      });
  }

  console.log(imageUrl)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <img
          src={imageUrl}
          alt="Imagen aleatoria"
          style={{ height: "30rem", marginBottom: "2rem" }}
        />
        <div className="container__btn">
          <button onClick={loadRandomImage} className="btn btn__change-img" style={{ padding: "1rem" }}>Cambiar Imagen</button>
          <button onClick={loadRandomImageCORS} className="btn" style={{ padding: "1rem" }}>Cambiar de API con CORS</button>

        </div>
      </header>
    </div>
  );
}

export default App;
