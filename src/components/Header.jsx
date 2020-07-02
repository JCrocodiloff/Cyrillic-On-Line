import React from "react";
import logo from '../images/logoCnz.png';

function Header(){
    return(
        <div className="header">
            <img src ={logo} alt="logo" className="logo" />
            <h3>Cyrillic On-Line - Ћирилица на жица</h3>
        </div>
    );
}

export default Header;