import Container from "../Container/Container";
import styled from "styled-components";
import Controls from "../Controls/Controls";
import List from "../List/List";

const Wrapper = styled.main`
  padding: 2rem 0;
  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

function Main({ countries }) {
  return (
    <Wrapper>
      <Container>
        <Controls />
        <List countries={countries} />
      </Container>
    </Wrapper>
  );
}

export default Main;
// import Container from "../Container/Container";
// import styled from "styled-components";

// const Wrapper = styled.main`
//   padding: 2rem 0;
//   @media (min-width: 767px) {
//     padding: 4rem 0;
//   }
// `;

// function Main({ children }) {
//   return (
//     <Wrapper>
//       <Container>{children}</Container>
//     </Wrapper>
//   );
// }

// export default Main;
