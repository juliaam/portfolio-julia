import { ArrowRight, Github } from 'lucide-react';
import { Button } from '../Button/Button';
import './Card.scss';

type CardProps = {
  title: string;
  description: string;
};

export function Card({ title, description }: CardProps) {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
      <div className="card__buttons">
        <Button label="Ir para projeto" icon={<ArrowRight />} />
        <Button label="Github" icon={<Github />} />
      </div>
    </div>
  );
}
