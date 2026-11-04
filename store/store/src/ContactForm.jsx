import { useState } from "react";

function ContactForm(){

    const [message, setMessage]= useState('');
    const [statusSendButton, setStatusSendButton]= useState(true);

    const handleTextChange=  (e)=>{
        const currentText=e.target.value;
        setMessage(e.target.value);
        
        if(currentText.length>0)
            setStatusSendButton(false);
        if(currentText.length==0)
            setStatusSendButton(true);
    }

    function handleClick(){
      return (<p>ההודעה נשלחה בהצלחה!</p>)
    }
     return(

        <form action="">
            <label htmlFor="">
        <textarea value={message} onChange={handleTextChange}>הקלד כאן </textarea>
        </label>
         <p> נשארו {100-message.length} תווים</p>
         <button type="submit" onClick={handleClick} disabled={statusSendButton}>שליחה</button>
         </form>

)
    
}


export default ContactForm;