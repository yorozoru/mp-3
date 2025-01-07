import { styled } from "styled-components";
import useTitleChanger from "../useTitleChanger";
import { ChangeEvent, useState } from "react";
import useOperations from "../useOperations";

const StyledMain = styled.main`
    padding: 0 3% 2% 2%;
    width: 100vw;
    @media (max-width: 750px) {
        height: 20%
        width: 20%
        margin: 0 auto;
  }
`;

const StyledDiv = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 750px) {
    width: 100%
  }
`;



const StyledH3 = styled.h3<{ negNum: number | null }>`
    text-align: center;
    font-size: calc(10px + 2vw);
    color: ${({negNum}) => {
        if (negNum === null || negNum < 0){
            return "Red";
        }
        else{
            return "Black";
        }
    }

} 
`;



const StyledInput = styled.input`
    height: 30%;
    text-align: center;
    font-size: calc(10px + 2vw);
`

const StyledLabel = styled.label`
    font-weight: bold;
    font-size: 20px;
    display: inline;
    margin-top: 5%;
    @media (max-width: 750px) {
    font-size: calc(1px + 2vw);
  }
`

const StyledButton = styled.button`
    display: block;
    background-color: #436cba;
    border: none;
    color: white;
    text-align: center;
    font-size: calc(0.5px + 1vw);
    margin: 2% 2%;
    padding: 2%;
    border-radius: 8px;
    font-weight: bold;

    @media (max-width: 750px) {
    font-size: calc(2px + 2vw);
    padding: 5%;
  }
`;

export default function Projects() {
    useTitleChanger("Projects");

    const [inputValues, setInputValues] = useState<[number | string, number | string]>(["", ""]);
    const { result, calculateValues, add, subtract, multiply, divide, pow } = useOperations();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        if (!isNaN(Number(e.target.value))) {
            let cloneArray = [...inputValues];
            cloneArray[index] = Number(e.target.value);
            setInputValues(cloneArray as [number | string, number | string]);
        }
    };

    const handleOperations = (operation: (a: number, b: number) => number) => {
        if (operation) {
            calculateValues(operation, inputValues);
        }
    };

    const cleared = () => {
        setInputValues(["",""]);
        calculateValues(() => null, [0,0]);
    };

    return (
        <StyledMain>
            <h2>Projects</h2>
            <StyledDiv>
            <StyledLabel htmlFor="firstNum">First Number: </StyledLabel>
            <StyledInput type="text" value={inputValues[0]} onChange={(e) => handleInputChange(e, 0)} name="firstNum" />
            <StyledLabel htmlFor="secondNum">Second Number: </StyledLabel>
            <StyledInput type="text" value={inputValues[1]} onChange={(e) => handleInputChange(e, 1)} name="secondNum" />
            <StyledButton onClick={() => handleOperations(add)}>+</StyledButton>
            <StyledButton onClick={() => handleOperations(subtract)}>-</StyledButton>
            <StyledButton onClick={() => handleOperations(multiply)}>*</StyledButton>
            <StyledButton onClick={() => handleOperations(divide)}>/</StyledButton>
            <StyledButton onClick={() => handleOperations(pow)}>^</StyledButton>
            <StyledButton onClick={() => cleared()}>Clear</StyledButton>
            <StyledH3 negNum={result}>{result !== null && !isNaN(result) ? result : ""}</StyledH3>
            </StyledDiv>
        </StyledMain>
    );
}