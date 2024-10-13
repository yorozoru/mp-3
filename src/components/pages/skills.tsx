import {styled} from "styled-components";
import useTitleChanger from "../title_changer";

const StyledMain = styled.main`
    padding: 0 2% 1% 2%;
`
const StyledTd = styled.td`

    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`

const StyledTh = styled.th`

    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`
export default function Skills() {
    useTitleChanger("Skills");
    return (
        <StyledMain>
           <h2>Skills</h2>
        <img src="/images/languages.jpg" alt="Progamming Languages Logos"/>
        <table>
            <tr>
                <StyledTh>Programming Languages</StyledTh>
                <StyledTh>Libraries</StyledTh>
                <StyledTh>Technical Proficiencies</StyledTh>
              </tr>
              <tr>
                <StyledTd>Python</StyledTd>
                <StyledTd>Pandas</StyledTd>
                <StyledTd>AWS</StyledTd>
              </tr>
              <tr>
                <StyledTd>Java</StyledTd>
                <StyledTd>NumPy</StyledTd>
                <StyledTd>Firebase</StyledTd>
              </tr>
              <tr>
                <StyledTd>C/C++</StyledTd>
                <StyledTd>Matplotlib</StyledTd>
                <StyledTd>Docker</StyledTd>
              </tr>
              <tr>
                <StyledTd>Javascript</StyledTd>
                <StyledTd>React</StyledTd>
                <StyledTd>MongoDB</StyledTd>
              </tr>
              <tr>
                <StyledTd>SQLite</StyledTd>
                <StyledTd>Selenium</StyledTd>
                <StyledTd>Postman</StyledTd>
              </tr>
        </table>
        </StyledMain>
    );
}
