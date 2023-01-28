import React from "react";

export default function Header(){
    return(
        <header className="header">
        <img 
            src={require("./../images/Trollface.png")}
            className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--cred">Created By Guy Ohana</h4>
    </header>

    )
}