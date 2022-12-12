import { useState } from "react";
import themeContext from "./themeContext";

const ThemeState = (props)=>{
    const s1 = { // state  
        "theme":"light"
    }

    const [state, setState] = useState(s1);

    const update = (Theme)=>{
        setTimeout(() => {
            setState({
                "theme": Theme.theme
            })
        }, 1000); // update state after 1 second
    }

    return (
        <themeContext.Provider value={{state, update}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeState;
