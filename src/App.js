import React, { useState } from "react";
// for removing the spinners for input
import "./App.css"
const App = () => {
  const [inputno, setInput] = useState();
  const [numbers, setNumbers] = useState([]);

  const addNumber = (event) => {
    event.preventDefault();
    let allValues = [];
    for (let i = 1; i <= parseInt(inputno); i++) {
      allValues = [...allValues, { value: "", id: i }];
    }
    // console.log(allValues);
    setNumbers(allValues);
  };

  const handleChange = (event, id) => {
    if (event.target.value === "") {
      return;
    }
    // console.log(numbers);
    const changedValue = numbers.map((value) => {
      if (value.id === id) {
        const updatedValues = {
          ...value,
          value: event.target.value,
        };
        // console.log(updatedValues);
        return updatedValues;
      }
      return value;
    });

    
    if (id !== parseInt(inputno)) {
      document.getElementById(id + 1).focus();
    }

    setNumbers(changedValue);
  };

  const handleBackspace = (event, id) => {
    
    if (event.keyCode === 8) {
      const changedValue = numbers.map((value) => {
        if (value.id === id) {
          const updatedValues = {
            ...value,
            value: "",
          };
          console.log(updatedValues);
          return updatedValues;
        }
        console.log(value);
        return value;
      });
      setNumbers(changedValue);
      if (id !== 1) {
        document.getElementById(id - 1).focus();
      }
    }
  };

  return (
    
      <div className="container-fluid mt-4 py-6 px-3">
        <h1>Enter inputno of digits you want </h1>
        <div className="form-group p-4">
          <input
            type="inputno"
            className="form-control"
            value={inputno}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="btn btn-success mt-3"
            onClick={(event) => addNumber(event)}
          >
            Submit
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {numbers.map((num, index) => (
            <div className="form-group-inline p-2" key ={index}>
              <input 
                style = {{
                  height: "60px",
                  width: "60px",
                  textAlign: "center"
                }}
                type="number"
                // autoFocus="true"
                autoComplete="off"
                inputMode='numeric' 
                pattern="[0-9]"
                id = {num.id}
                className="form-control"
                value={num.value}
                onChange={(event) => handleChange(event, num.id)}
                maxLength="1"
                onKeyDown={(event) => handleBackspace(event, num.id)}
              />
            </div>
          ))}
        </div>
      </div>
     );
};

export default App;
