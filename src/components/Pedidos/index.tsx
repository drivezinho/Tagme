import { Container, Content } from "./styles";
import pratoGrandeBobo from "../../assets/prato-bobo-grande.jpg";

import { Cards } from "../Cards/index";
import { Header } from "../Header";
import { GlobalStyle } from "../../styles/global";

const cards = [
  {
    avatar: pratoGrandeBobo,
    name: "Arroz de Mariscos para 2 pessoas",
    description:
      "Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com pimentões e cebola juliene, temperos e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.",
  },
  {
    avatar: pratoGrandeBobo,
    name: "Frutos do Mar ao Azeite de Ervas",
    description:
      "Para apreciadores de frutos do mar, com leve aroma de azeite de ervas finas. Mexilhões, polvo, peixe, camarão e lula salteados com azeite, champignon, cebola picada,pimentão, alho, alcaparras e brócolis. Servidos com arroz de brócolis e legumes salteados",
  },
];

export function Pedidos() {
  return (
    <>
      <Header></Header>
      <Container>
        <Content>
          <h3>ultimos pedidos</h3>
          {cards.map((card) => (
            <Cards
              avatar={card.avatar}
              name={card.name}
              description={card.description}
            />
          ))}
        </Content>
      </Container>
      <GlobalStyle />
    </>
  );
}
