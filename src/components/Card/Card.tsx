import { ArrowRight, Github } from 'lucide-react';
import { Button } from '../Button/Button';
import './Card.scss';
import { redirect } from '../../utils/redirectFunc';

type CardProps = {
  title: string;
  description: string;
  stack: string;
  status: string;
  github: string;
  link: string;
  img: string;
};

export function Card({
  title,
  description,
  stack,
  // status,
  github,
  link,
  img,
}: CardProps) {
  const stackIcons: any = {
    Javascript: '/javascript.svg',
    Html: '/html.svg',
    Css: '/css.svg',
    VueJs: '/vue.svg',
    NodeJs: '/nodejs.svg',
    Express: '/express.svg',
    React: '/react.svg',
    Typescript: '/typescript.svg',
    Zustand: '/zustand.svg',
    NestJs: '/nestjs.svg',
  };

  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
      {img && <img className="card__img" src={img} />}
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
          onClick={() => redirect(link)}
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
