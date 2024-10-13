import StyledHeader from "./components/header"
import Navbar from "./components/nav"
import StyledFooter from "./components/footer"
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom"
import MainPage from "./components/pages/main"
import Education from "./components/pages/education"
import {styled, createGlobalStyle} from "styled-components"
import Experiences from "./components/pages/experience"
import Skills from "./components/pages/skills"
import Documents from "./components/pages/documents"


const TheGrandDiv = styled.div`
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    background-color: white;
    color: black;
    

    @media (max-width: 750px) {
      font-size: calc(2px + 2vw);
      
      img {
        width: 70%;
      }
  }
`
const NavMainWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 750px){
    flex-direction: column;
    font-size: calc(2px + 2vw);
  }
`
const Root = () => {
  return (
    <TheGrandDiv>
      <StyledHeader/>
      <NavMainWrapper>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<MainPage/>} />
          <Route path = "/education" element={<Education/>} />
          <Route path = "/experiences" element={<Experiences/>} />
          <Route path = "/skills" element={<Skills/>} />
          <Route path = "/documents" element={<Documents/>} />
        </Routes>
      </NavMainWrapper>
    <StyledFooter/>
    </TheGrandDiv>
  )
}

const router = createBrowserRouter(
  [{path:"*", Component: Root}]
)

function App() {

  return (
  <RouterProvider router={router}/>
  )
}

export default App
