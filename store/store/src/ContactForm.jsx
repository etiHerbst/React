import { useState } from "react";

function ContactForm(){

    const [message, setMessage]= useState('');
    const [statusSendButton, setStatusSendButton]= useState(false);

    const handleTextChange=  (e)=>{
        const currentText=e.target.value;
        setMessage(e.target.value);
        
        // if(currentText.length>0)
        //     setStatusSendButton(false);
        // if(currentText.length==0)
        //     setStatusSendButton(true);
    }
    if (statusSendButton){
       return <p>"ההודעה נשלחה בהצלחה!"</p>
    }

    function handleClick(){
        setStatusSendButton(true)
    }
     return(

        <form action="">
            <label htmlFor="">
        <textarea  value={message} onChange={handleTextChange} disabled={message.length>99}>הקלד כאן </textarea>
        </label>
         <p> נשארו {100-message.length} תווים</p>
         <button type="submit" onClick={handleClick} disabled={message.length==0}>שליחה</button>
         </form>

)
    
}


export default ContactForm;