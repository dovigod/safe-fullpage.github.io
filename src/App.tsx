import { FullpageContainer, FullpageElement } from "@safe-fullpage/react";
import styled from "styled-components";

function App() {
  return (
    <FullpageContainer>
      <FullpageElement>
        <SectionA>
          <TextA>SAFE-FULLPAGE</TextA>
        </SectionA>
      </FullpageElement>
      <FullpageElement>
        <SectionB>
          {" "}
          <TextB>SAFE-FULLPAGE</TextB>
        </SectionB>
      </FullpageElement>
      <FullpageElement>
        <SectionC>
          {" "}
          <TextC>SAFE-FULLPAGE</TextC>
        </SectionC>
      </FullpageElement>
      <FullpageElement>
        <SectionD>
          <TextD>FOOTER</TextD>
        </SectionD>
      </FullpageElement>
    </FullpageContainer>
  );
}

export default App;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SectionA = styled(Section)`
  background-color: #8acdd7;
`;

const SectionB = styled(Section)`
  background-color: #ff90bc;
`;

const SectionC = styled(Section)`
  background-color: #ffad84;
`;

const SectionD = styled(Section)`
  background-color: #83a2ff;
  height: 400px;
`;

const Text = styled.h1`
  font-size: clamp(4rem, 10vw, 30rem);
  color: white;
`;

const TextA = styled(Text)`
  color: white;
`;

const TextB = styled(Text)`
  color: #495e57;
`;

const TextC = styled(Text)`
  color: #7e30e1;
`;
const TextD = styled(Text)``;
