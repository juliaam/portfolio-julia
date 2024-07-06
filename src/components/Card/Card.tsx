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
    </div>
  );
}
