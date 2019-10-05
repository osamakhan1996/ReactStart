import React, { useState } from 'react';
function InputBox() {
    const [name,setName] = useState("");
    const [password,setpassword] = useState("");
  return (
   <div>
       <input 
       type="text" 
       value={name} 
       placeholder="username"
       name="Enter name" 
       onChange= { (event) => {
           console.log("onChange", event.target.value);
           setName(event.target.value)
       }}
       /><br/>
       <input 
       type="password" 
       placeholder="password"
       value={password} 
       name="Enter name" 
       onChange= { (event) => {
           console.log("onChange", event.target.value);
           setpassword(event.target.value)
       }}
       />
   </div>
  );
}

export default InputBox;
