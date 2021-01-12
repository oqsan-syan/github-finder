import React from 'react';
import './Repo.css';

const Repo = ({name, description, privateRepo, created_at, updated_at, watchers_count, default_branch, has_downloads}) => {
  return (
    <div className="repos__item">
      <h4 className="repo__title">{name}</h4>
      <p className="repo__descr">{description}</p>
      <div className="repo__checks">
        <div className="repo__checks-item">
          Branch: <span>{default_branch}</span>
        </div>
        <div className="repo__checks-item">
          Private: { privateRepo ? <input type="checkbox" checked/> : <input type="checkbox" disabled/>}
        </div>
        <div className="repo__checks-item">
          Downloads: { has_downloads ? <input type="checkbox" checked/> : <input type="checkbox" disabled/>}
        </div>
      </div>
      <div className="repo__info">
        <div className="repo__info-item">
          Created: <span>{created_at}</span>
        </div>
        <div className="repo__info-item">
          Last updated: <span>{updated_at}</span>
        </div>
        <div className="repo__info-item">
          Watchers: <span>{watchers_count}</span>
        </div>
      </div>
    
    </div>
  );
};

export default Repo;