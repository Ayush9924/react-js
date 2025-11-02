import { createRoot } from "react-dom/client";

function Car(){
    const myfunc =()=>{
        alert('hello world');
    };
    return(
        <button onClick={myfunc} disabled={false}>Click me </button>
    );
}
createRoot(document.getElementById('root')).render(
    <Car/>
);

// create a react component that diplays a greeting msg based on the time of day if the curerect tie is 12 00 noon good morning if its between 12 6 good afternoon else display good evening 