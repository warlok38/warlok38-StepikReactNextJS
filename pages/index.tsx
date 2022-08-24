import { Htag } from "./../components/Htag/Htag";
import { Button } from "./../components/Button/Button";
import { P } from "../components";
import { Tag } from "./../components/Tag/Tag";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Ура</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">ghost</Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Tag size="s" color="green">
        green
      </Tag>
      <Tag color="primary">primary</Tag>
    </div>
  );
}
