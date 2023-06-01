
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Header} from './components/Header.js';
import {TOP} from './components/TOP.js';
import {Slider} from './components/Slider.js';
import {About} from './components/About.js';
import { Regis } from './components/Regis.js';

function App() {
  return (
  <>
    <TOP />
    <Header />
    <Slider />
    <About />
    <Regis />
  </>
  );
}

export default App;
