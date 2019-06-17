import React from 'react';


const contactUs=(props)=>{
    
    return(
        
        <div className="contactm"> 
            
            <h1>Contact us</h1>
            <h2>please feel free to talk to us if you have any question. We endevour to answer within 24hours </h2>
            
            <form action="/action_page.php">
                <div className="name"><input type="text" name="name" placeholder="Name" required/></div>
                <div className="email"><input type="email" name="email" placeholder="Email" required/></div>
                <div className="message"><input type="text" name="lname"  placeholder="Message" required/></div>
                <div className="send-cancel">
                    <span className="submit"><input type="submit" value="Send"/></span>   <span className="cancel"><input type="button" value="Cancel"/></span>  </div>
            </form>

        </div>
    )
};
export default contactUs;