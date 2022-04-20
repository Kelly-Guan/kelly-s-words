import {useState, useEffect} from 'react';
import styled from "styled-components";
import "../App.css"


const width = 8
const candyColors = [
    'blue', 
    'red',
    'orange',
    'yellow',
    'purple',
    'green'
]

export default function CandyCrush(){
    const [currentColorArrangement, setcurrentColorArrangement] = useState([])


    function createBoard (){ //creating 64 squares w/ candyColors []
        const randomColorArray = []
        for (let i=0; i < width * width; i++){
            const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)] //picking a random color from my CandyColor array
            randomColorArray.push(randomColor)
        }
        setcurrentColorArrangement(randomColorArray)
    }
    useEffect(() => {
        createBoard()
    }, [])

    return(
        <BoardGame>
            <Game>
                {currentColorArrangement.map((candyColors , index) => (
                    <CandyPieces
                    key={index} 
                    style={{backgroundColor:candyColors}}
                    ></CandyPieces> 
    
                ))}

            </Game>

        </BoardGame>

    );
}

const BoardGame = styled.div`
  display: flex;
  padding: 30px;
`;

const Game = styled.div`
    width:32rem;
    height:32rem;
    display:flex;
    flex-wrap: wrap;
    background-color: grey;
`;

const CandyPieces = styled.img`
    width:4rem;
    height:4rem;

`;