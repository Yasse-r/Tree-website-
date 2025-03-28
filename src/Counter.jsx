import { useState } from "react"
import { useEffect } from "react";


function Counter() {
    const [i, setI] = useState(0);
    const [text , setText]  = useState("");
    
    useEffect(() => {
        if (i > 10) {
            setText("score is more than 10");
        } else if (i === 10) {
            setText("on 10");
        } else if (i < 0) {
            setText("you are below zero");
        } else {
            setText("score is less than 10");
        }
    }, [i]);
    
    const increment = () =>{
        setI(i+1);
        
    }
    const decrease = () =>{
        setI(i-1);
        
    }
    const reset = () =>{
        setI(0);
        
    }
    return(
        <>
        <h4> {i} {text}  </h4>
        <button onClick={()=>{ increment() }} > +1 </button>
        <button onClick={()=>{ reset() }}> reset </button>
        <button onClick={()=>{ decrease(); }}> -1 </button>
        </>
    )
}
export default Counter