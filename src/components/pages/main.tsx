import {styled} from "styled-components";
import useTitleChanger from "../title_changer";

const StyledMain = styled.main`
    padding: 0 2% 1% 2%;
`
export default function MainPage() {
    useTitleChanger("Home");
    return (
        <StyledMain>
            <h2>Home</h2>
            <img src="/images/selfimage.jpeg" alt="Person in Beanie, Smiling" />
            <p>
                My name is Dillan Pho and I am a fourth-year Undergraduate studying Computer Science at Boston University.
                I am currently looking for full-time and internship positions to get jumpstarted on my career, and I have a great interest in full-stack development and machine learning.
                <br /><br />
            </p>
            <p>
                Welcome to my digitized resume, here you'll find my <b>Work Experiences</b> and <b>Educational</b> history which could be of help to you.
            </p>
        </StyledMain>
    );
}
