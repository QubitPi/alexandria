import React from 'react';
import './App.css';

function App() {
  return (
      <>
        <main>
          <section className="glass">
            <div className="dashboard">
              <div className="project">
                <div className="imageCropper">
                  <img src="./images/avatar.png" alt=""/>
                </div>
                <h3>Alexandria</h3>
                <p>Library</p>
              </div>
              <div className="links">
                <div className="link">
                  <img src="images/library.png" alt=""/>
                  <h2>Aristotle</h2>
                </div>
                <div className="link">
                  <img src="images/library.png" alt=""/>
                  <h2>Herodotus</h2>
                </div>
                <div className="link">
                  <img src="images/library.png" alt=""/>
                  <h2>Xenophon</h2>
                </div>
                <div className="link">
                  <img src="images/library.png" alt=""/>
                  <h2>Hippocrates</h2>
                </div>
              </div>
              <a href="https://github.com/QubitPi/alexandria" style={{textDecoration: "none"}}>
                <div className="github">
                  <h2>Fork it on GitHub</h2>
                  <img src="images/github.png" width="80%" alt=""/>
                </div>
              </a>

            </div>
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
