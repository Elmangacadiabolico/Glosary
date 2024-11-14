import { useState, useCallback } from 'react';
import './css/Practica2.css';

export default function Component() {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      title: "Addition",
      description: "Create two variables, 'a' and 'b', and add them together. Store the result in a variable named 'result'.",
      expectedOutput: "8",
      userCode: "",
      result: null,
    },
    {
      id: 2,
      title: "Array Sum",
      description: "Create an array of numbers and return the sum of all elements. Store the sum in a variable named 'result'.",
      expectedOutput: "15",
      userCode: "",
      result: null,
    },
    {
      id: 3,
      title: "Even or Odd",
      description: "Write a function that determines if a number is even or odd and store 'even' or 'odd' in a variable named 'result'.",
      expectedOutput: "even",
      userCode: "",
      result: null,
    },
  ]);

  const runCode = useCallback((index) => {
    const exercise = exercises[index];
    let output;

    try {
      // Evalúa el código del usuario de forma segura
      const userFunction = new Function('result', exercise.userCode + '; return typeof result !== "undefined" ? result : undefined;');
      output = userFunction();

      setExercises(prevExercises =>
        prevExercises.map((ex, i) =>
          i === index
            ? {
                ...ex,
                result:
                  output !== undefined
                    ? output.toString() === exercise.expectedOutput
                      ? "¡Correcto!"
                      : "Incorrecto. Intenta de nuevo."
                    : "Error: Asegúrate de definir una variable 'result' con tu respuesta.",
              }
            : ex
        )
      );
    } catch (error) {
      setExercises(prevExercises =>
        prevExercises.map((ex, i) =>
          i === index ? { ...ex, result: "Error: " + error.message } : ex
        )
      );
    }
  }, [exercises]);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Interactive Coding Exercises</h1>
      {exercises.map((exercise, index) => (
        <div className="card" key={exercise.id}>
          <div className="card-title">{exercise.title}</div>
          <p className="card-description">{exercise.description}</p>
          <label htmlFor={`code-${exercise.id}`} className="label">
            Your Code:
          </label>
          <textarea
            id={`code-${exercise.id}`}
            className="textarea"
            placeholder="Write your code here, e.g., let result = ...;"
            value={exercise.userCode}
            onChange={(e) =>
              setExercises(prevExercises =>
                prevExercises.map((ex, i) =>
                  i === index ? { ...ex, userCode: e.target.value } : ex
                )
              )
            }
          />
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => runCode(index)}
              className="button"
            >
              Run Code
            </button>
            {exercise.result && (
              <div className={`result ${exercise.result.includes("¡Correcto!") ? "result-correct" : "result-incorrect"}`}>
                {exercise.result}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}