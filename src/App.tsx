import './App.css';
import {Audios, Dashboard} from "./components";

function App() {
  return (
      <>
        <main>
          <section className="glass">
            <Dashboard />
            <Audios />
          </section>
        </main>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </>
  );
}

export default App;
