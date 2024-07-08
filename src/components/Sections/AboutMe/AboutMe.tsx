import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { SocialMediaButton } from '../../SocialMediaButton/SocialMediaButton';
import './AboutMe.scss';
import { Button } from '../../Button/Button';
import { useState } from 'react';
import { redirect } from '../../../utils/redirectFunc';
import { CONTACTS, tabs } from '../../../contants/index';
import fileDownload from 'js-file-download';

export function AboutMe() {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].id);

  const today = new Date();

  const getAge = () => Number(today.getFullYear() - 2005);

  const collegeSemesterByDate = () => {
    const dateInitCollege = new Date('2023-04-01');
    const diffMeses =
      (today.getFullYear() - dateInitCollege.getFullYear()) * 12 +
      (today.getMonth() - dateInitCollege.getMonth());

    return Math.ceil(diffMeses / 6);
  };

  const downloadPdf = async () => {
    try {
      const response = await fetch(
        '/src/data/pdf/estagio-analise-sistemas-julia-moraes.pdf'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      fileDownload(blob, 'estagio-analise-sistemas-julia-moraes.pdf');
    } catch (error) {
      console.error('Error downloading the PDF:', error);
    }
  };

  const getLinkById = (id: 'linkedin' | 'github' | 'mail') => {
    const contact = CONTACTS.find((contact) => contact.id === id);
    if (contact) {
      return contact.link;
    }
    return '';
  };

  const openMail = (link: string) => {
    console.log(link, 'link');
    window.location.href = link;
  };

  const selectActualTab = (tabId: string) => () => {
    setSelectedTab(tabId);
  };

  return (
    <section className="aboutMe" id="aboutme">
      <div className="aboutMe__body">
        <p className="aboutMe__title">Desenvolvedora</p>
        <p className="aboutMe__subtitle">
          Olá, eu sou a Júlia, tenho {getAge()} anos e sou do Rio de Janeiro.
          Prazer em conhecer. Desde que comecei minha carreira com
          desenvolvimento, trabalhei remotamente para agências e contribui com
          pessoas bem talentosas. Sou naturalmente curiosa para conhecer o
          processo das coisas, e busco sempre me aprimorar, seja tecnicamente ou
          como pessoa.
        </p>
        <a
          href="/src/data/pdf/resume.pdf"
          download
          className="aboutMe__btn-container"
        >
          <Button
            className="aboutMe__resume-button"
            label="Currículo"
            icon={<ArrowRight />}
          />
        </a>
        <div className="aboutMe__tabber">
          <div className="aboutMe__tabberTitles">
            {tabs.map((tab, index) => (
              <>
                <p
                  className={`aboutMe__tab ${selectedTab === tab.id ? 'aboutMe__tab--active' : ''}`}
                  onClick={selectActualTab(tab.id)}
                >
                  {tab.label}
                </p>
                {index !== tabs.length - 1 && (
                  <div className="aboutMe__vertical-divider"></div>
                )}
              </>
            ))}
          </div>
          {selectedTab === 'contact' && (
            <div className="aboutMe__icons">
              <SocialMediaButton
                icon={<Linkedin />}
                onClick={() => redirect(getLinkById('linkedin'))}
              />
              <SocialMediaButton
                icon={<Github />}
                onClick={() => redirect(getLinkById('github'))}
              />
              <SocialMediaButton
                icon={<Mail />}
                onClick={() => openMail(getLinkById('mail'))}
              />
            </div>
          )}
          {selectedTab === 'skills' && (
            <div className="aboutMe__skills">
              <img
                width={48}
                height={48}
                src="/javascript.svg"
                className="aboutMe__icon"
              />
              <img
                width={48}
                height={48}
                src="/vue.svg"
                className="aboutMe__icon"
              />
              <img
                width={48}
                height={48}
                src="/react.svg"
                className="aboutMe__icon"
              />
              <img
                width={48}
                height={48}
                src="/css.svg"
                className="aboutMe__icon"
              />
              <img
                width={48}
                height={48}
                src="/html.svg"
                className="aboutMe__icon"
              />
            </div>
          )}
          {selectedTab === 'education' && (
            <div className="aboutMe__education">
              Pontifícia Universidade Católica do Rio Grande do Sul - Análise e
              Desenvolvimento de Sistemas - {collegeSemesterByDate()} período
              <div className="aboutMe__education--footer">
                <Button
                  label="Ver curso"
                  icon={<ArrowRight />}
                  onClick={() =>
                    redirect(
                      'https://online.pucrs.br/graduacao/analise-desenvolvimento-sistemas-full-stack-mobile'
                    )
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
