import React from "react";
import Zoom from "@material-ui/core/Zoom";

function Sekcija(props){
    const [expand,setExpand]=React.useState(false);
    function steganje(){
        setExpand(prevVal => !prevVal)
    }

    return(
        <div className="container">
            <div className={"sekcija"+(expand?"":" nonExpSekcija")}>
                <div className="sekcNaslov">
                    <h1 onClick={steganje}>{props.naslov+(expand?"":" ⤵️")}</h1>
                </div>
            
                {/* Да се прикажуваат дугмињата само кога секцијата е стегната. */}
                <Zoom in={expand}><div className="pozadinaDugminja">{props.children}</div></Zoom>
            
            </div>
        </div>

        
    );
}

export default Sekcija;