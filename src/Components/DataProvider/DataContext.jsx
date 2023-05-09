import { useState, createContext } from "react";



export const changeModeContext = createContext();


export default function ChangeMode(props){

    const [mode , setMode] = useState(true);

    return(
        <changeModeContext.Provider value={[mode , setMode]}>
            {props.children}
        </changeModeContext.Provider>
    )

}