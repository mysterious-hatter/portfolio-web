import About from './About';
import './App.css'
import Contacts from './Contacts';
import Header from './Header';
import Projects from './Projects';

function App() {
  return (
    <div>
      <Header /> 
        <About></About>
        <Projects></Projects>
        <Contacts></Contacts>
        <footer>© Grigorii Eidelkind 2026. All rights reserved.</footer>
    </div>
  );
}

export default App
