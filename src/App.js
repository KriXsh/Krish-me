import React from 'react';
import './App.css';
import krishBG from './logo/krishBG.jpg';



function App() {
  return (
    <>

      <div className="container">
        <div className="container-app">
        <img src={krishBG} alt="Profile" className="krishBG" />
        <h1>Hi! I am krishnendu Ghosal. I am a Software Engineer.</h1>
        <p>I graduated from <a href="https://www.lpu.in" target="_blank" rel="noopener noreferrer">Lovely professional University</a> in 2023.</p>
        <p>As a passionate MERN stack developer, I thrive on creating seamless user experiences while diving deep into backend complexities. My fascination extends beyond coding to DevOps methodologies and cloud innovations. I am eager to blend my frontend finesse, backend expertise, and DevOps enthusiasm in a role that values my skills and fosters new growth opportunities. Let's embark on a journey where code meets innovation, turning every challenge into an opportunity for advancement.</p>
        <p>I am dedicated and driven, with a love for discussing code and a commitment to modesty and continuous improvement. My big dreams inspire me to create remarkable things and fulfill my responsibilities, to make a lot of people I am connected to proud.</p>
        <div className="icons">
          <a href="https://github.com/KriXsh" target="_blank" rel="noopener noreferrer">
            <img src="./Image/github.svg" alt="GitHub" />
          </a>
          <a href="mailto:krishnnedughsal999@gmail.com">
            <img src="./Image/emial.svg" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/krish-me/" target="_blank" rel="noopener noreferrer">
            <img src="./Image/project.svg" alt="linkdin" />
          </a>
        </div>
      </div>
     </div>
     </>
  );
}

export default App;
