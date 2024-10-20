import { styled } from "styled-components";
import useTitleChanger from "../useTitleChanger";

const StyledMain = styled.main`
  padding: 0 2% 4% 2%;
`;

const StyledPDFWrapper = styled.div`
  position: relative;
  width: 70vw;
  height: 100%;
  overflow: hidden;
  background: #ccc;
  @media (max-width: 750px) {
    padding-bottom: 75%;
    width: 100%;
    height: 100vh;
  }
`;

const StyledEmbed = styled.embed`
  position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  border: none;

  @media (max-width: 750px) {
    height: 100%; 
  }
`;

export default function Documents() {
  useTitleChanger("Documents");
  return (
    <StyledMain>
      <h2>Documents</h2>
      <StyledPDFWrapper>
        <StyledEmbed src="/pdf/RESUME_REDUX.pdf" type="application/pdf" />
      </StyledPDFWrapper>
    </StyledMain>
  );
}
