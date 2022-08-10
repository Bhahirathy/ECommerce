import React from "react";
import "./Popup.css"


function Popup(props){
    return( props.trigger) ? (
        <div className="popup">
            <div clasName="popup-inner">
                <button clasName="close" onClick={()=>props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}
export default Popup;