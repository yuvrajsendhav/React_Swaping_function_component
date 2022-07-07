import { useState } from "react";

function Swap()
{
    var [a,setX] = useState(0);
    var [b,setY] = useState(0);

function first(e)
{
    setX(e.target.value);
}
function Second(e)
{
    setY(e.target.value);
}
function final()
{
     let temp = a;
     a=b;
     b=temp;
     setX(a);
     setY(b);
     a.preventDefault();
     b.reventDefault();
}
return(
    <div>
        <form onSubmit={e => {final(e)}}>
        <input type="text" onChange={(e) =>first(e)} /><br/><br/>
        <input type="text" onChange={(e) =>Second(e)} /><br/><br/>
        <input type="button" onClick={final} value="Swap" /> 
        <p>a={a},b={b}</p>
        </form>
    </div>
)
}
export default Swap;