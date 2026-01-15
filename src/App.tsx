import About from './About';
import './App.css'
import Header from './Header';

function App() {
  return (
    <div>
      <Header /> 
        <About></About>

      <section id="projects" className="section">
        {/* Projects content */}
      </section>

      <section id="contacts" className="section">
        {/* Contacts content */}
      </section>
    </div>
  );
}

export default App
