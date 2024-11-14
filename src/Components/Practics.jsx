import React, { useState, useRef } from 'react';
import './css/Practica.css';

function Practics() {
  const [respuestaFunction, setRespuestaFunction] = useState('');
  const [mensajeFunction, setMensajeFunction] = useState('');

  const [respuestaLetConst, setRespuestaLetConst] = useState('');
  const [mensajeLetConst, setMensajeLetConst] = useState('');

  const [respuestaReturn, setRespuestaReturn] = useState('');
  const [mensajeReturn, setMensajeReturn] = useState('');

  const [respuestaIfElse, setRespuestaIfElse] = useState('');
  const [mensajeIfElse, setMensajeIfElse] = useState('');

  const translationsRef = useRef({
    title: 'JavaScript Reserved Words Exercises',
    activity1: '1. What is the keyword for defining a function in JavaScript?',
    activity2: '2. What are the keywords for declaring variables in JavaScript with block scope?',
    activity3: '3. What is the keyword to return a value from a function in JavaScript?',
    activity4: '4. What are the keywords for a conditional control structure in JavaScript?',
    correctFunction: 'Correct! The keyword is "function".',
    incorrectFunction: 'Incorrect. Try again.',
    correctLetConst: 'Correct! The keywords are "let" and "const".',
    incorrectLetConst: 'Incorrect. Remember to write "let and const".',
    correctReturn: 'Correct! The keyword is "return".',
    incorrectReturn: 'Incorrect. Try again.',
    correctIfElse: 'Correct! The keywords are "if" and "else".',
    incorrectIfElse: 'Incorrect. Write "if and else".'
  });

  const translateToEnglish = () => {
    document.querySelector('h1').innerText = translationsRef.current.title;
    document.querySelectorAll('.actividad h2').forEach((element, index) => {
      element.innerText = translationsRef.current[`activity${index + 1}`];
    });
  };

  const verificarFunction = () => {
    const respuestaCorrecta = 'function';
    setMensajeFunction(
      respuestaFunction.trim().toLowerCase() === respuestaCorrecta
        ? translationsRef.current.correctFunction
        : translationsRef.current.incorrectFunction
    );
  };

  const verificarLetConst = () => {
    const respuestaCorrecta = 'let y const';
    setMensajeLetConst(
      respuestaLetConst.trim().toLowerCase() === respuestaCorrecta
        ? translationsRef.current.correctLetConst
        : translationsRef.current.incorrectLetConst
    );
  };

  const verificarReturn = () => {
    const respuestaCorrecta = 'return';
    setMensajeReturn(
      respuestaReturn.trim().toLowerCase() === respuestaCorrecta
        ? translationsRef.current.correctReturn
        : translationsRef.current.incorrectReturn
    );
  };

  const verificarIfElse = () => {
    const respuestaCorrecta = 'if y else';
    setMensajeIfElse(
      respuestaIfElse.trim().toLowerCase() === respuestaCorrecta
        ? translationsRef.current.correctIfElse
        : translationsRef.current.incorrectIfElse
    );
  };

  return (
    <div className="contenedor-practicas">
      <h1>Ejercicios de Palabras Reservadas en JavaScript</h1>
      <button onClick={translateToEnglish}>Translate to English</button>

      {/* Actividad 1: function */}
      <div className="actividad">
        <h2>1. ¿Cuál es la palabra clave para definir una función en JavaScript?</h2>
        <input
          type="text"
          value={respuestaFunction}
          onChange={(e) => setRespuestaFunction(e.target.value)}
          placeholder="Escribe tu respuesta"
        />
        <button onClick={verificarFunction}>Verificar</button>
        {mensajeFunction && <p>{mensajeFunction}</p>}
      </div>

      {/* Actividad 2: let y const */}
      <div className="actividad">
        <h2>2. ¿Cuáles son las palabras clave para declarar variables en JavaScript que tienen alcance de bloque?</h2>
        <input
          type="text"
          value={respuestaLetConst}
          onChange={(e) => setRespuestaLetConst(e.target.value)}
          placeholder="Escribe tu respuesta (ejemplo: let y const)"
        />
        <button onClick={verificarLetConst}>Verificar</button>
        {mensajeLetConst && <p>{mensajeLetConst}</p>}
      </div>

      {/* Actividad 3: return */}
      <div className="actividad">
        <h2>3. ¿Cuál es la palabra clave para devolver un valor desde una función en JavaScript?</h2>
        <input
          type="text"
          value={respuestaReturn}
          onChange={(e) => setRespuestaReturn(e.target.value)}
          placeholder="Escribe tu respuesta"
        />
        <button onClick={verificarReturn}>Verificar</button>
        {mensajeReturn && <p>{mensajeReturn}</p>}
      </div>

      {/* Actividad 4: if y else */}
      <div className="actividad">
        <h2>4. ¿Cuáles son las palabras clave para hacer una estructura de control condicional en JavaScript?</h2>
        <input
          type="text"
          value={respuestaIfElse}
          onChange={(e) => setRespuestaIfElse(e.target.value)}
          placeholder="Escribe tu respuesta (ejemplo: if y else)"
        />
        <button onClick={verificarIfElse}>Verificar</button>
        {mensajeIfElse && <p>{mensajeIfElse}</p>}
      </div>
    </div>
  );
}

export default Practics;
