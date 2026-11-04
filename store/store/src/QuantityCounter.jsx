import { useState } from "react"


function QuantityCounter(){

    const [Quantity,setQuantity]= useState(1);

    function handleAdd(){
        setQuantity(Quantity+1);
    }
      function handleDec(){
        if(Quantity==0)
            return;
        setQuantity(Quantity-1);
    }
const price= 25;
    
return(
    <div>
<section className="QuantityCounter">

<h2>סט כוסות 25 ש"ח ליחידה</h2> <br />
<p>{Quantity} :כמות</p>
<button onClick={handleAdd}>+</button>
<button onClick={handleDec}>-</button>
<p> סך הכל {Quantity*price} ש"ח</p>


</section>
</div>
);}

export default QuantityCounter;