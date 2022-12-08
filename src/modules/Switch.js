import React from "react";

const Swtch = () => {
// function Swtch() { 

    const handleChange = () => { 
      
      console.log('The checkbox was toggled'); 

      
    }; 
    
    return ( 
      
      <div>  <input type="checkbox" onChange={handleChange} /> </div> 
      
    ); 
    
  }
  
  export {Swtch};