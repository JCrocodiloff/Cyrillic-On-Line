import React from "react";


function Dugme(props){

    return(
        <button className="bukvaDugme" onClick={() => {
            props.onClicked(props.value);
        }}>{props.text}</button>
    );
}

export default Dugme;