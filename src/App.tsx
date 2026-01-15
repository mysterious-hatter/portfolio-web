import About from './About';
import './App.css'
import Header from './Header';
import Projects from './Projects';

function App() {
  return (
    <div>
      <Header /> 
        <About></About>
        <Projects></Projects>

      <section id="contacts" className="section">
        {/* Contacts content */}
      </section>
    </div>
  );
}

export default App
