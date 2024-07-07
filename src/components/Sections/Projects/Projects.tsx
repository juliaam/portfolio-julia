import { Card } from '../../Card/Card';
import './Projects.scss';

export function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="projects__title">Projetos que contribui</h1>
      <div className="projects__cards">
        <Card title="aa" description="aa" />
        {/* fazer map */}
      </div>

      <h1 className="projects__title">Projetos autorais</h1>
      <div className="projects__cards">
        <Card title="aa" description="aa" />
        {/* fazer map */}
      </div>
    </div>
  );
}
