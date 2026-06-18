import {useRef} from "react";
function Reference(){
    const inputref = useRef();
    const uber = ()=>{
        inputref.current.focus();
    };
    return (
        <>
        <label>Name:</label>
        <input ref={inputref} type="text"/>
        <button onClick={uber}>Enter</button>
        </>
        
    );

    

}
export default Reference;