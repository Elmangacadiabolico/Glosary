import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Datos() {
  const [data, setData] = useState(null); // Estado para almacenar los datos de la API
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const [mdnDescription, setMdnDescription] = useState(''); // Estado para almacenar la descripción de MDN

  // Función para obtener la referencia de MDN
  const getMDNReference = async (jsMethod) => {
    const url = `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/${jsMethod}`;
    try {
      const { data } = await axios.get(url);

      // Simulación de la descripción para este ejemplo:
      const description = `Descripción sobre ${jsMethod} obtenida desde MDN: ${url}`;
      setMdnDescription(description); // Actualizar el estado con la descripción simulada de MDN
    } catch (error) {
      setError(`Error al obtener la referencia de MDN: ${error.message}`);
    }
  };

  useEffect(() => {
    // Llamada para obtener la referencia de MDN al montar el componente
    getMDNReference('Array/map');

    // Función para obtener datos de una API externa
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data'); // Cambia a la URL de tu API
        setData(response.data); // Actualiza el estado con los datos recibidos
      } catch (error) {
        setError(`Error al obtener los datos: ${error.message}`);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchData(); // Ejecuta la función para obtener los datos
  }, []); // El arreglo vacío asegura que el efecto solo se ejecute una vez al montar el componente

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
 
  return (
    <div>
      <h1>Datos recibidos:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h2>Descripción de MDN para "Array.map":</h2>
      <p>{mdnDescription ? mdnDescription : 'Cargando descripción de MDN...'}</p>
    </div>
  );
}