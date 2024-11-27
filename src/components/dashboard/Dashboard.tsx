import './Dashboard.css';

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
