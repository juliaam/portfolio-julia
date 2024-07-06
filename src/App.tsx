import './styles/base.scss';
import { Navbar } from './components/NavBar/Navbar';
import { AboutMe } from './components/AboutMe/AboutMe';

function App() {
  return (
    <main className="main">
      <Navbar />
      <AboutMe />
    </main>
  );
}

export default App;
