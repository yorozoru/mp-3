import { Link } from "react-router-dom";
import { styled } from "styled-components";


const ListNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f6a217;
    margin: 0;
`

const StyledLinks = styled(Link)`
    padding: 1.5rem;
    margin: 1rem;
    border-radius: 10px;
    background-color: white;
    text-align: center;
    text-decoration: none;
    font-family: "Josefin Sans", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    color: black;
    

    &:hover {
        background-color: #23266d; 
        color: white; 
    }
`

export default function Navbar() {
    return (
            <ListNav>
                <StyledLinks to="/">Home</StyledLinks>
                <StyledLinks to="/education">Education</StyledLinks>
                <StyledLinks to="/experiences">Experiences</StyledLinks>
                <StyledLinks to="/projects">Projects</StyledLinks>
                <StyledLinks to="/skills">Skills</StyledLinks>
                <StyledLinks to="/documents">Documents</StyledLinks>
            </ListNav>
    )
}