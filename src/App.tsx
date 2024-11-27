import './App.css';
import Dashboard from "./components/dashboard/Dashboard";
import Audios from "./components/audios/Audios";

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
