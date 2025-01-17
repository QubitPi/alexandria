/**
 * Copyright Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './Dashboard.css';
import GitHubSection from "./GitHubSection";

import {ReactComponent as Greek} from "./greek.svg"
import {ReactComponent as Latin} from "./latin.svg"
import {ReactComponent as Hebrew} from "./hebrew.svg"
import {ReactComponent as Sanskrit} from "./sanskrit.svg"

function Dashboard() {
  return (
      <div className="dashboard">
        <div className="project">
          <div className="imageCropper">
            <img src="./images/avatar.png" alt=""/>
          </div>
          <h3>Alexandria</h3>
          <p>Grammar</p>
        </div>
        <div className="links">
          <div className="link">
            <Greek className="icon"/>
            <h2>Ancient Greek</h2>
          </div>
          <div className="link">
            <Latin className="icon"/>
            <h2>Latin</h2>
            <h3>Coming Soon</h3>
          </div>
          <div className="link">
            <Hebrew className="icon"/>
            <h2>Classical Hebrew</h2>
            <h3>Coming Soon</h3>
          </div>
          <div className="link">
            <Sanskrit className="icon"/>
            <h2>Classical Sanskrit</h2>
            <h3>Coming Soon</h3>
          </div>
        </div>
        <GitHubSection/>
      </div>
  );
}

export default Dashboard;
