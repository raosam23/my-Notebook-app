import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=> {
    const obj = {
        "name" : "Samarth",
        "class" : "8b"
    }
    const [state, setState] = useState(obj);
    // eslint-disable-next-line
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name" : "Saul Goodman",
                "class" : "5b"
            });
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;