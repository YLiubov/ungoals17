import "./App.scss";

import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import { Container } from "./components/layout/Container/Container";

const App = () => {
  return (
    <>
      <Header />

      <Main>
        <Container
          width="100%"
          backgroundColor="#29bce8"
          padding="40px 0"
        >
          <Container width="80%">
            <h1>FN's Verdensmål</h1>
            <p>De 17 verdensmål for bæredygtig udvikling.</p>
          </Container>
        </Container>

        <Container
          width="80%"
          padding="40px 0"
        >
          <h2>Verdensmål 17</h2>
          <p>Partnerskaber for handling.</p>
        </Container>

        <Container
          width="100%"
          backgroundColor="#b8dc42"
          padding="40px 0"
        >
          <Container width="80%">
            <h2>De 17 verdensmål</h2>
            <p>Her kommer indhold om verdensmålene.</p>
          </Container>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

export default App;