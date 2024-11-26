import React from 'react';
import './App.css';

function App() {
  return (
      <>
        <main>
          <section className="glass">
            <div className="dashboard">
              <div className="user">
                <img src="images/avatar.png" alt=""/>
                <h3>Simo Edwin</h3>
                <p>Pro Member</p>
              </div>
              <div className="links">
                <div className="link">
                  <img src="images/twitch.png" alt=""/>
                  <h2>Streams</h2>
                </div>
                <div className="link">
                  <img src="images/steam.png" alt=""/>
                  <h2>Games</h2>
                </div>
                <div className="link">
                  <img src="images/upcoming.png" alt=""/>
                  <h2>New</h2>
                </div>
                <div className="link">
                  <img src="images/library.png" alt=""/>
                  <h2>Library</h2>
                </div>
              </div>
              <div className="pro">
                <h2>Join pro for free games.</h2>
                <img src="images/controller.png" alt=""/>
              </div>
            </div>
            <div className="games">
              <div className="status">
                <h1>Active Games</h1>
                <input type="text"/>
              </div>
              <div className="cards">
                <div className="card">
                  <img src="images/assassins.png" alt=""/>
                  <div className="card-info">
                    <h2>Assassins Creed Valhalla</h2>
                    <p>PS5 Version</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
                <div className="card">
                  <img src="images/sackboy.png" alt=""/>
                  <div className="card-info">
                    <h2>Sackboy A Great Advanture</h2>
                    <p>PS5 Version</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
                <div className="card">
                  <img src="images/spiderman.png" alt=""/>
                  <div className="card-info">
                    <h2>Spiderman Miles Morales</h2>
                    <p>PS5 Version</p>
                    <div className="progress"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
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
