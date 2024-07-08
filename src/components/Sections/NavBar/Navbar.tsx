import './Navbar.scss';

export function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <ul className="navbar__list">
        <div className="navbar__icon">
          <span>Júlia Moraes</span>
        </div>
        <div className="navbar__topics">
          <li aria-label="sobre mim">
            <a href="#aboutme">Sobre mim</a>
          </li>
          <li aria-label="projetos">
            <a href="#projects">Projetos</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
