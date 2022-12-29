import { useState } from "react";

export default function ConditionalComponent() {
    
    
    
    const[display, setDisplay]=useState(true);

    return display ? (<h1>Idey here</h1>) : (<h1>I don commot</h1>) ;

}