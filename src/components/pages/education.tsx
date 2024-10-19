import {styled} from "styled-components";
import useTitleChanger from "../useTitleChanger";

const StyledMain = styled.main`
    padding: 0 2% 1% 2%;
`
export default function Education() {
    useTitleChanger("Education");
    return (
        <StyledMain>
            <h2>Education</h2>
        <img src="/images/bu.png" alt="Boston University Logo"/>
            <p>
            <strong>Boston University</strong><br/>
            B.A. in Computer Science<br/>
            Expected <b>May 2025</b>.
            </p>

        <br/><br/>
        <img src="/images/lowellhigh.png" alt="Boston University Logo"/>
            <p>
            <strong>Lowell High School</strong><br/>
            2017 - 2021
            </p>
        </StyledMain>
    );
}
