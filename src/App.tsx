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
                  <img src="images/library.png" width="20%" alt=""/>
                  <h2>Categories</h2>
                </div>
                <div className="link">
                  <img src="images/library.png" width="20%" alt=""/>
                  <h2>On Interpretation</h2>
                </div>
                <div className="link">
                  <img src="images/library.png" width="20%" alt=""/>
                  <h2>Prior Analytics</h2>
                </div>
                <div className="link">
                  <img src="images/library.png" width="20%" alt=""/>
                  <h2>Posterior Analytics</h2>
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
                    <h2>Paragraph 1</h2>
                    <p>Aristotle's Categories</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage">33%</h2>
                </div>
                <div className="card">
                  <img src="images/second.png" width="10%" alt=""/>
                  <div className="card-info">
                    <h2>Paragraph 2</h2>
                    <p>Aristotle's Categories</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage">66%</h2>
                </div>
                <div className="card">
                  <img src="images/third.png" width="10%" alt=""/>
                  <div className="card-info">
                    <h2>Paragraph 3</h2>
                    <p>Aristotle's Categories</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage">100%</h2>
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
