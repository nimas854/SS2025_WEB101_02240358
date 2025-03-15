<ProfileCard name="Tashi" role="Software Developer" /> 
 
function ProfileCard (props) { 
    return ( 
    <div> 
        <h2>{props.name}</h2> 
        <p>{props.role}</p> 
    </div> 
    ); 
}

function LikeButton() { 
    const [likes, setLikes] = useState(0); 
    return (
    <div> 
        <p>Likes: {likes}</p> 
        <button onClick={() => setLikes (likes + 1)}>Like</button> 
    </div> 
    ); 
}

import React, { useState } from 'react'; 
import './ProfileCard.css'; 
function ProfileCard (props) { 
// Get data from props 
const { name, role, avatar, skills } = props; 
// State for showing/hiding details 
const [showDetails, setShowDetails] = useState(false); 
// Toggle details visibility 
const toggleDetails = () => { 
setShowDetails(!showDetails); 
};
}