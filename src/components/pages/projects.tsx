import {styled} from "styled-components";
import useTitleChanger from "../title_changer";
import {useState} from "react";
import useOperate from "../operation_abstraction";

const StyledMain = styled.main`
    padding: 0 2% 1% 2%;
`

const StyledButton = styled.button`
    display: flex;
    font-family: "Josefin Sans", Helvetica, sans-serif;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    padding: 3vh;
    margin: 1.5vh 2vh;
    border-radius: 1vh;
    color: black;
    font-weight: bold;
    text-align: center;
    font-size: 1.3em;
`
export default function Projects() {
    useTitleChanger("Projects");

    const[inputValues, setInputValues] = useState([0,0])
    const[result, setResult] =  useState(null)

    const handleInputChange = (e, index:number) => {
        if (!isNaN(Number(e.target.value))){
            let cloneArray = [...inputValues];
            cloneArray[index] = Number(e.target.value)
            setInputValues(cloneArray)
        }

    }

    const [addResult, add] = useOperate((a, b) => a + b);
    const [subResult, subtract] = useOperate((a, b) => a - b);
    const [mulResult, multiply] = useOperate((a, b) => a * b);
    const [divResult, divide] = useOperate((a, b) => a / b);

    const handleOperations = (operation) =>{
        setResult(null);
        operation(inputValues)
    }


    return (
        <StyledMain>
                <label htmlFor="firstNum">First Number: </label>
                <input type="text" value = {inputValues[0]} onChange={(e)=> handleInputChange(e,0)} name="firstNum"/>
                <label htmlFor="secondNum">Second Number: </label>
                <input type="text" value = {inputValues[1]} onChange={(e)=> handleInputChange(e,1)} name="secondNum"/>
                <StyledButton onClick={() => handleOperations(add)}>+</StyledButton>
                <StyledButton onClick={() => handleOperations(subtract)}>-</StyledButton>
                <StyledButton onClick={() => handleOperations(multiply)}>*</StyledButton>
                <StyledButton onClick={() => handleOperations(divide)}>/</StyledButton>
                {/* <StyledButton onclick="pow()">^</StyledButton>
                <StyledButton onclick="cleared()">Clear</StyledButton> */}
                <h3>{result}</h3>
        </StyledMain>
    );
}
