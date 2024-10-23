import {styled} from "styled-components";
import { Link } from "react-router-dom";


const FixedFooter = styled.footer`
    position: relative;
    flex-shrink: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    background-color: #436cba;
    color: white;
    margin-top: auto;
`
export default function StyledFooter (){
    return (
        <FixedFooter>All Rights Reserved by Dillan Pho <Link to="https://www.linkedin.com/in/dillan-pho/">Credits</Link>©</FixedFooter>
    )

}