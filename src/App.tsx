import './styles/base.scss';
import { Navbar } from './components/Sections/NavBar/Navbar.tsx';
import { AboutMe } from './components/Sections/AboutMe/AboutMe.tsx';
import { Projects } from './components/Sections/Projects/Projects.tsx';

function App() {
  return (
    <main className="main">
      <Navbar />
      <AboutMe />
      <Projects />
    </main>
  );
}

export default App;
