import { Htag } from "./../components/Htag/Htag";
import { Button } from "./../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Ура</Htag>
      <Button appearance="primary">Кнопка</Button>
    </div>
  );
}
