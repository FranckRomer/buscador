import React, {useState} from 'react'; 

function Checkbox(props) { 
  
  const [Swtch, setChecked] = useState(false); 
  const checkedText = props.onText; 
  const uncheckedText = props.offText; 
  const togglePreference = props.togglePreference; 
  const animal = props.animal; 
  
  const handleChange = () => { 
    
    setChecked(!Swtch); togglePreference(animal); 
    
  }; 
  
  return ( 
    
    <div>
    
      
      
      <p>
        {Swtch ? checkedText : uncheckedText}
      </p> 
      
    </div>
      
  ); 

}; 


export {Checkbox};