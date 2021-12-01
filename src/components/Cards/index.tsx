import { Card } from "./styles";

interface CardItemProps {
  avatar: any;
  name: string;
  description: string;
}

export function Cards(props: CardItemProps) {
  return (
    <Card>
      <header>
        <img src={props.avatar} alt="" />
        <div>
          <strong>{props.name}</strong>
          <p>{props.description}</p>
        </div>
      </header>
    </Card>
  );
}
