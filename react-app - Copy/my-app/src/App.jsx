import React, { useState } from 'react';
import Header from './Header';
import ProfileCard from './ProfileCard';
import EditForm from './EditForm';
import StatsDashboard from './StatsDashboard';
import './App.css';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    bio: 'Software Developer',
    avatar: 'https://via.placeholder.com/150',
    email: 'john.doe@example.com',
    location: 'New York, USA',
  });

  const [isEditing, setIsEditing] = useState(false);

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="app-container">
      <Header />
      {isEditing ? (
        <EditForm user={user} updateUser={updateUser} cancelEdit={() => setIsEditing(false)} />
      ) : (
        <ProfileCard user={user} editProfile={() => setIsEditing(true)} />
      )}
      <StatsDashboard />
    </div>
  );
}

export default App;
