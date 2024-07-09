import { Card } from '../../Card/Card';
import './Projects.scss';
import { PROJECTS_BYME, PROJECTS_CONTRIBUITED } from '../../../contants/index';

export function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="projects__title">Projetos que contribui</h1>
      <div className="projects__cards">
        {PROJECTS_CONTRIBUITED.map((project) => (
          <Card
            key={project.github}
            title={project.title}
            description={project.description}
            stack={project.stack}
            status={project.status}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>

      <h1 className="projects__title">Projetos autorais</h1>
      <div className="projects__cards">
        {PROJECTS_BYME.map((project) => (
          <Card
            key={project.github}
            title={project.title}
            description={project.description}
            stack={project.stack}
            status={project.status}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
