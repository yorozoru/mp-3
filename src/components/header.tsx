import { styled } from "styled-components";


const MainHeader = styled.header`
    display: flex; 
    flex-direction: column;
    width: 100vw;
    background-color: #436cba;
    color: white;
    top: 0;
    left: 0;
    font-size: 12px;
    padding: 1%;
`
const StyledPara = styled.p`
    margin: 0;
`

const Name = styled.h1`
    font-size: 3.2em;
    line-height: 1.1;
    margin: 0;
`
export default function StyledHeader () {
    return(
    <MainHeader>
         <Name>Dillan Pho</Name>
         <StyledPara>My Online Resume</StyledPara>
    </MainHeader>
    )
}