import React from 'react';
const ProfileCard = ({ name, age, profilePicture, bio }) => {
  return (
    <div className="profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-age">Age: {age}</p>
      <p className="profile-bio">{bio}</p>
    </div>
  );
}; 

export default ProfileCard;
