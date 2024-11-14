import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Glosario.css';

const glosario = {
  Var: {
    description: 'JavaScript allows declaring variables using `var`, `let`, and `const`. `var` has a global or function scope, while `let` and `const` have block scope. `const` is used to declare constants, whose value cannot be reassigned.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations',
  },
  Array: {
    description: 'An array is a data structure that allows storing multiple values in a single variable. In JavaScript, arrays can contain data of any type and offer methods to manipulate them, such as `push`, `pop`, `map`, `filter`, among others.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  },
  If: {
    description: 'The `if` statement allows executing a block of code if a specific condition is met. It can also be used with `else if` and `else` to check multiple conditions.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else',
  },
  For: {
    description: 'The `for` loop allows executing a block of code repeatedly as long as a condition is met. It is useful for iterating over arrays or objects.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement',
  },
  While: {
    description: 'The `while` loop executes a block of code as long as a condition remains true. It is useful when the exact number of required iterations is unknown.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement',
  }
};

export default function Glosario() {
  const [temaSeleccionado, setTemaSeleccionado] = useState(null);
  const navigate=useNavigate()

  const manejarSeleccion = (tema) => {
    setTemaSeleccionado(tema);
  };

  const Mover=()=>{
    navigate('/practice')
  }

  return (
    <div className="contenedor-glosario">
      <h1>Glossary of Basic JavaScript Concepts</h1>
      <p>Select a topic to view its description and link to the official documentation.</p>

      <div className="botones-temas">
        {Object.keys(glosario).map((tema) => (
          <button 
            key={tema}
            onClick={() => manejarSeleccion(tema)} 
            className="boton-tema">
            {tema}
          </button>
        ))}
      </div>

      {temaSeleccionado && (
        <div className="informacion-tema">
          <h2>{temaSeleccionado}</h2>
          <p>{glosario[temaSeleccionado].description}</p>
          <a 
            href={glosario[temaSeleccionado].url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="enlace-documentacion">
            Visit the official documentation
          </a>
        </div>
      )}
      <button onClick={Mover}>Practice</button>
    </div>
  );
}