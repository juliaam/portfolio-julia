import './Navbar.scss';

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <div className="navbar__icon">
          <span>Júlia Moraes</span>
        </div>
        <div className="navbar__topics">
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Contatos</li>
        </div>
      </ul>
    </nav>
  );
}
