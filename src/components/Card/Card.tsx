import { ArrowRight, Github } from 'lucide-react';
import { Button } from '../Button/Button';
import './Card.scss';

type CardProps = {
  title: string;
  description: string;
  stack: string;
  status: string;
  github: string;
  link: string;
};

type Stack =
  | 'Javascript'
  | 'Html'
  | 'Css'
  | 'Vue.Js'
  | 'NodeJs'
  | 'Express'
  | 'React'
  | 'Typescript'
  | 'Zustand'
  | 'NestJs';

export function Card({
  title,
  description,
  stack,
  status,
  github,
  link,
}: CardProps) {
  const stackIcons: any = {
    Javascript: 'public/javascript.svg',
    Html: 'public/html.svg',
    Css: 'public/css.svg',
    VueJs: 'public/vue.svg',
    NodeJs: 'public/nodejs.svg',
    Express: 'public/express.svg',
    React: 'public/react.svg',
    Typescript: 'public/typescript.svg',
    Zustand: 'public/zustand.svg',
    NestJs: 'public/nestjs.svg',
  };

  const redirect = (link: string): any => {
    console.log('link', link);
    window.open(link, '_blank');
  };

  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
      <div className="card__stack">
        {stack.split(', ').map((tech, index) => (
          <img
            key={index}
            src={stackIcons[tech]}
            alt={tech}
            className="card__stack-icon"
          />
        ))}
      </div>
      <div className="card__buttons">
        <Button
          label="Ir para projeto"
          icon={<ArrowRight />}
          onClick={redirect(link)}
        />
        <Button
          label="Github"
          icon={<Github />}
          onClick={() => redirect(github)}
        />
      </div>
    </div>
  );
}
