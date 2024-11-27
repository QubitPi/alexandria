import React from 'react';
import './App.css';
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
      <>
        <main>
          <section className="glass">
            <Dashboard />
            <div className="audios">
              <div className="status">
                <h1>Aristotle</h1>
                <input type="text"/>
              </div>
              <div className="cards">
                <div className="card">
                  <img src="images/first.png" width="10%" alt=""/>
                  <div className="card-info">
                    <h2>Categories</h2>
                    <p>Aristotle's Six Works on Logics</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage">10%</h2>
                </div>
                <div className="card">
                  <img src="images/second.png" width="10%" alt=""/>
                  <div className="card-info">
                    <h2>On Interpretation</h2>
                    <p>Aristotle's Six Works on Logics</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage">0%</h2>
                </div>
                <div className="card">
                  <img src="images/third.png" width="10%" alt=""/>
                  <div className="card-info">
                    <h2>Prior Analytics</h2>
                    <p>Aristotle's Six Works on Logics</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage">0%</h2>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </>
  );
}

export default App;
