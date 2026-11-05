import { useState } from "react";

function ProductCard({ name, price, description, features }) {
   
    const [Quantity,setQuantity]= useState(0);
    const [AddToBasket ,setAddToBasket]=useState(false);
   
   
 
 const sum= Quantity*price;

    function handleAdd(){
        setQuantity(Quantity+1);
    }
      function handleDec(){
        if(Quantity==0)
            return;
        setQuantity(Quantity-1);
    }

    


const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p className="price">מחיר: {price} ₪</p>
      <p>{description}</p>
      
      <ul>
        {features?.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </ul>

{/* ========================== */}

<p>{Quantity} :כמות</p>
<button onClick={handleAdd}>+</button>
<button onClick={handleDec}>-</button>
<p> סך הכל {sum} ש"ח</p>
{AddToBasket ? (
 <p>נוסף לעגלה  {Quantity} יחידות</p>
):(
<button  disabled={Quantity === 0} onClick={() => setAddToBasket(true)}> הוספה לעגלה
</button>)}




    </div>
  );
}
export default ProductCard;