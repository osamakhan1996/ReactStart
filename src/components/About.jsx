import React from 'react';


function About(props) {
  return (
    <div className="App">
      This is About page
      <button onClick={()=>{
          setTimeout(()=>{
            props.history.push('/')
          },5000)
      }}>Go to Home</button>
      <button onClick={()=>{props.history.push('/contact')}}>Go to Contact</button>
    </div>
  );
}

export default About;
