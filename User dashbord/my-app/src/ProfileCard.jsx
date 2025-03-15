function ProfileCard({ user, editProfile }) {
    return (
      <div className="profile-card">
        <img src={user.avatar} alt="Avatar" />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <p>Email: {user.email}</p>
        <p>Location: {user.location}</p>
        <button onClick={editProfile}>Edit Profile</button>
      </div>
    );
  }
  
  export default ProfileCard;