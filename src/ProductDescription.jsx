import { useState } from "react";

function ProductDescription(){

    const [Description, SetDescription]= useState(false)

    function handleAdd(){
        if(Description==true)
            SetDescription(false)
        else
            SetDescription(true)

    }

    return(
        <div>
 <h3>סט של שישה כוסות זכוכית עמידות</h3>
 <button onClick={handleAdd}>{Description? 'הצג פחות': 'קרא עוד'}</button>
 { Description && <p >כוסות איכותיות מתאימות לשולחן שבת וחג אירוע וחופה <br /> אחריות מלאה ל6 שנים</p>}

        </div>
    )
}
export default ProductDescription;