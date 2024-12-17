import { useContext } from "react";
import {UserNameContext} from "./ComponentA";

function ComponentB() {
    const userName = useContext(UserNameContext);
    
    return (
        <>
            <h1>Component B</h1>

            <p>Hello, {userName}</p>
        </>
    );
}

export default ComponentB