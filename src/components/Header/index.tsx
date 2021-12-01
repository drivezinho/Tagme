import logococobambumini from "../../assets/logococobambumini.png";
import iconlogin from "../../assets/iconlogin.png";
import { Link } from "react-router-dom";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logococobambumini} alt="" />

        <input type="text" placeholder="buscar receita..." />

        <Link to="/pedidos">
          <img src={iconlogin} alt="" />
        </Link>
        <Link to="/receitas">
          <img src={iconlogin} alt="" />
        </Link>
        <Link to="/sair">
          <img src={iconlogin} alt="" />
        </Link>
      </Content>
    </Container>
  );
}
