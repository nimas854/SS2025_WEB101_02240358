function App(){
    return (
        <div classname="app">
            <Header />
            <Profilecard />
            <Statedisplay />
            <Editform />
        </div>
    );
}

import React,{useState} from "react";

function Profilecard() {
    const [name, setName] = useState("Sherab Nima Rigzin")
    const [bio, setBio] = useState("Softwear")
    const updateName = () => {
        setName("Lhendup")

    };

    return (
        <div className="Profile-card">

            <h2>{name}</h2>
            <p>{bio}</p>
            <button></button>


            </div>
    )


}


