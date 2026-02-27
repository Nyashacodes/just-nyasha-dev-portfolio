import 'rsuite/dist/rsuite-no-reset.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Credits from './components/Credits';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
      </div>
      <Credits />
    </div>
  );
}

export default App;
