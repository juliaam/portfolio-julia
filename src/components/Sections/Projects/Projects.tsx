import { Card } from '../../Card/Card';
import './Projects.scss';

export function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <Card
          title="cadastro"
          description="App de cadastro com opção de cadastro com google"
        />
      </div>
    </div>
  );
}
