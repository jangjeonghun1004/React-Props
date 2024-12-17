import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
    const[userName, setUserName] = useState("Unknow User Name");

    return (
        <>
            <h1>Component A</h1>

            <UserNameContext.Provider value={userName}>
                <ComponentB />
            </UserNameContext.Provider>
        </>
    );
}

export default ComponentA
export const UserNameContext = createContext<string>('');