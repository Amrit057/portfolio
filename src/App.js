import React from 'react';
import './index.css';

const App = () => {
  return (
    <>
      <div  className='whole_div'>
        <div className='logo'>
          <img src='./images/icon1.png' />
        </div>

        <div className='nav'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Porfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

       
      </div>
      </div>
<div className='intro'>
  <p style={{color: "gray"}}>WELCOME TO MY WORLD</p>
  <h2>Hi, I'm Amrit Pandey</h2>
  <h2 style={{color: "#E94B3CFF"}}>Front End Developer</h2>
  <h2>based in Nepal</h2>
</div>
    </>
  )
}

export default App; 
