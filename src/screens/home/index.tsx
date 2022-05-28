import { Counter } from "../../components/counter";
import { Container, Title } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Title>Counter APP</Title>

      <Counter />
    </Container>
  );
};
