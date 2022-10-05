import '../App.css';

import styled from "styled-components";
import Nav from "../components/navBack"
import {useEffect, useState} from 'react';

function Wordle() {
  const [wordGrid, setwordGrid] = useState([]);

  const [currentFocusedRow, setCurrentFocusedRow] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const solution = "candy";


  useEffect(() => {
    function initalizeWordGrid() {
      let newWordGrid = [];
      for (let i = 0; i < 6; i++){
        newWordGrid.push([])
      }
      for (let i = 0; i < 6; i++){
        for (let  j= 0; j < 5; j++){
          newWordGrid[i].push({letter: "", state: "empty"}) // states 1. correct 2. wrong position 3. incorrect 4. empty
        }
      }

      setwordGrid(newWordGrid);
    }

    if (wordGrid.length === 0){
      initalizeWordGrid();
    }

  });

  const handleChange = (activity, row, column) => {
    const newWordGrid = [...wordGrid]
    newWordGrid[row][column].letter = activity.target.value;
    setwordGrid(newWordGrid)
  }
  const handleSubmit = () => {
    const newWordGrid = [...wordGrid]
    const currentWord = newWordGrid[currentFocusedRow];
    for (let i = 0; i < currentWord.length; i++){
      if (currentWord[i].letter === solution[i]){
        currentWord[i].state ="correct";
      }
      else if (solution.includes(currentWord[i].letter)){
        currentWord[i].state ="wrongPosition";
      }
      else{
        currentWord[i].state ="incorrect";
      }
    }

    let isCorrect =true;
    for (let i = 0; i < currentWord.length; i++){
      if (currentWord[i].state !== "correct"){
        isCorrect = false;
        setCurrentFocusedRow(currentFocusedRow + 1);
      }
    }
    setIsGameOver(isCorrect);

  };


  return (
    <body>

    <Div>
    <Nav />
    <h1>kelly's words of words</h1>
    {isGameOver && <h2> Game Over</h2>}
      {wordGrid.map((row, rowIndex) => (
      <RowWrapper key={rowIndex}>
        {row.map((col, colIndex) => (
        <Letters
          type="text" 
          status={col.state}
          key={colIndex}
          value={wordGrid[rowIndex][colIndex].letter}
          onChange={(activity) => handleChange(activity, rowIndex, colIndex)}
        />
        ))}
      </RowWrapper>
      ))}

      <SubmitButton onClick={handleSubmit}>ENTER</SubmitButton  > 
    </Div>
    </body>

  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const RowWrapper = styled.div`
  display: flex;
  gap:8px;
`;

const Letters = styled.input`
  font-size: 38px;
  text-align: center;
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.status === "correct"){
      return "#B0D8A4"
    }
    else if (props.status === "wrongPosition"){
      return "#FEE191"
    }
    else if (props.status === "incorrect"){
      return "#E84258"
    }
    else if (props.status === "empty"){
      return "#373a4d"
    }
  }};
  padding: 10px;
  width: 38px;
  height:38px;
  border: none;
`;

const SubmitButton = styled.button `
  font-size: 20px;
  border-radius: 4px;
  border: none;
  padding:6px 12px;
  margin-top: 1rem;
  letter-spacing: 2px;
  text-transform: capitalize;  
  cursor:pointer;
  background-color: #FF63A0;
`;



export default Wordle;
