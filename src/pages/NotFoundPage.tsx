import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container/Container";

export const NotFoundPage = () => {
  return (
    <Container width="80%" padding="40px 0">
      <h1>404</h1>
      <p>Siden, du leder efter, findes ikke.</p>

      <Link to="/">
        Gå tilbage til forsiden
      </Link>
    </Container>
  );
};