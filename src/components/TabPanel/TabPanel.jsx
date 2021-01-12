import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Followers from '../Followers/Followers';
import Following from '../Following/Following';
import Repos from '../Repos/Repos';
import Gists from '../Gists/Gists';
import './TabPanel.css';
import repoIcon from './images/repos.png';
import folloIcon from './images/followers.png';
import followingicon from './images/followings.png';
import gistsIcon from './images/gists.png';

const TabPanel = ({data}) => {

  if(!data) {
    return <div></div>
  }

  return (
    <Router>
      <div className="tab-panel__wrapper">
        <div className="tab-panel">
          <Link to="/repos">
            <div className="tab-panel__item">
              <div className="tab-panel__item-icon">
                <img src={repoIcon} alt=""/>
              </div>
              <div>
                <div className='tab-panel__item-num'>{data.public_repos}</div>
                <p className='tab-panel__item-text'>Repositories</p>
              </div>
            </div>
          </Link>
          <Link to='/followers'>
          <div className="tab-panel__item">
            <div className="tab-panel__item-icon">
                <img src={folloIcon} alt=""/>
              </div>
              <div>
                <div className='tab-panel__item-num'>{data.followers}</div>
                <p className='tab-panel__item-text'>Followers</p>
            </div>
          </div>
          </Link>
          <Link to='/following'>
            <div className="tab-panel__item">
              <div className="tab-panel__item-icon">
                <img src={followingicon} alt=""/>
              </div>
              <div>
                <div className='tab-panel__item-num'>{data.following}</div>
                <p className='tab-panel__item-text'>Following</p>
              </div>
            </div>
          </Link>
          <Link to='gists'>
            <div className="tab-panel__item">
              <div className="tab-panel__item-icon">
                <img src={gistsIcon} alt=""/>
              </div>
              <div>
                <div className='tab-panel__item-num'>{data.public_gists}</div>
                <p className='tab-panel__item-text'>Gists</p>
              </div>
            </div>
          </Link>
         
        </div>
        <Switch>
              <Route exact path="/">
                <Repos data={data}/>
              </Route>
              <Route path="/repos">
                <Repos data={data} />
              </Route>
              <Route path='/followers'>
                <Followers data={data} />
              </Route>
              <Route path='/following'>
                <Following data={data} />
              </Route>
              <Route path='/gists'>
                <Gists data={data} />
              </Route>
            </Switch>
      </div>
      
    </Router>
  );
};

export default TabPanel;