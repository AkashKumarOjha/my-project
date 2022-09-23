import {createContext , useState } from "react" ;
//import react from "react";

export const counterContext = createContext();

function CreateContextProvider(props) {

    const [sname] = useState("Akash");
    const [sroll] = useState("14dit283");
    const [saddr] = useState("Ranihat");

    const [tname] = useState("Dronacharya");
    const [tid] = useState("BHAG01");
    const [tadds] = useState("Ayodhya");

    const [bname] = useState("EastAyodhya");
    const [bidn] = useState("SHT2022");
    const [badds] = useState("Banglore");

    const [cname] = useState("Dhanurbidya");
    const [cdure] = useState("Five Years");
    const [cfee] = useState("50000");

    return(
        <counterContext.Provider value={{sname,sroll,saddr,tname,tid,tadds,bname,bidn,badds,cname,cdure,cfee}}>
            {props.children}
        </counterContext.Provider>
    )
}

export default CreateContextProvider;