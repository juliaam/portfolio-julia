import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialMediaButton } from '../../SocialMediaButton/SocialMediaButton';
import './AboutMe.scss';

export function AboutMe() {
  return (
    <section className="aboutMe" id="aboutme">
      <div className="aboutMe__body">
        <p className="aboutMe__title">Desenvolvedora</p>
        <p className="aboutMe__subtitle">
          Olá, eu sou a Júlia. Prazer em conhecer. Desde que comecei minha
          carreira com desenvolvimento, trabalhei remotamente para agências e
          contribui com pessoas bem talentosas. Sou naturalmente curiosa para
          conhecer o processo das coisas, e busco sempre me aprimorar, seja
          tecnicamente ou como pessoa.
        </p>
        <div className="aboutMe__icons">
          <SocialMediaButton icon={<Linkedin />} />
          <SocialMediaButton icon={<Github />} />
          <SocialMediaButton icon={<Mail />} />
        </div>
      </div>
    </section>
  );
}
