import { Container, Content } from "./style";
import bgLogin from "../../assets/img-bg-login.jpg";
import logococobambu from "../../assets/logococobambu.png";
import { GlobalStyle } from "../../styles/global";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <Container>
        <Content>
          <img src={bgLogin} alt="" className="bg-login" />
          <input
            type="text"
            placeholder="Nome de Usuario"
            className="input-login"
          />
          <input
            type="text"
            placeholder="Senha de Usuario"
            className="input-senha"
          />

          <Link to="/pedidos">
            <button type="submit">Acessar</button>
          </Link>

          <img src={logococobambu} alt="" className="logococobambu" />
        </Content>
      </Container>
      <GlobalStyle />
    </>
  );
}
