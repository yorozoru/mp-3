import StyledHeader from "./components/header"
import Navbar from "./components/nav"
import StyledFooter from "./components/footer"
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom"
import MainPage from "./components/pages/main"
import Education from "./components/pages/education"
import {styled} from "styled-components"
import Experiences from "./components/pages/experience"
import Skills from "./components/pages/skills"

const TheGrandDiv = styled.div`
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    background-color: white;
    color: black;
`
const NavMainWrapper = styled.div`
  display: flex;
  flex-direction: row
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
