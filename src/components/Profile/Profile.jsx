import React from 'react';
import address from './images/address.png';
import email from './images/email.png';
import companies from './images/companies.png';
import website from './images/website.png';
import './Profile.css';

const Profile = ({data}) => {
  if(!data) {
    return <div></div>
  }

  return (
    <div className='profile'>
      <div className="profile-col-l">
        <img src={data.avatar_url} alt="" className='profile__avatar'/>
        <p className="profile__login">{data.login}</p>
        <a className="profile__ghprofile" href={data.html_url} target='_blank' rel="noreferrer">
          <button>
           Github profile
          </button>
        </a>
      </div>
      <div className="profile-col-r">
        <div className="profile-top">
          <h1 className="profile__name">
            {data.name}
          </h1>
          <p className="profile__bio">
            {data.bio}
          </p>
        </div>
        <div className="profile__descr">
          <div className="profile__descr-item">
            <img src={address} alt=""/>
            <p>{data.location}</p>
          </div>
          <div className="profile__descr-item">
            <img src={companies} alt=""/>
            <p>{data.company ? data.company : 'me'}</p>
          </div>
          <div className="profile__descr-item">
            <img src={email} alt=""/>
            <p>{data.email ? data.email : "not email"}</p>
          </div>
          <div className="profile__descr-item">
            <img src={website} alt=""/>
            <p>{data.blog}</p>
          </div>
          <div className="profile-bottom">
            <span>Update:{data.updated_at.slice(0,10)}</span>
            <span>Create:{data.created_at.slice(0,10)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;