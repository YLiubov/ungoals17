import { Container } from "./Container";

export const Main = () => {
  return (
    <main>
      <Container
        width="100%"
        backgroundColor="#29cbe8"
        padding="40px"
      >
        <h1>FN's Verdensmål</h1>
        <p>De 17 verdensmål for bæredygtig udvikling.</p>
      </Container>

      <Container
        width="80%"
        backgroundColor="#b8dc42"
        padding="30px"
      >
        <h2>Verdensmål 17</h2>
        <p>Partnerskaber for handling.</p>
      </Container>
    </main>
  );
};