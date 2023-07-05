import React from 'react'
import profile from ' ../../../public/Picsart_23-07-04_17-12-15-109.jpg'
import './Home.css'
import Zoom from 'react-reveal/Zoom';
import TypeWriter from '../Pages/Font/Textanimation'
// import Reveal from 'react-reveal/Reveal';

const typeWriter = ["WEB DEVELOPER", "MERN STACK DEVELOPER", "FRONT-END DEVELOPER"];
const Home = () => {
    return (
       
        <div id='section-container'>
            <Zoom>
                {/* left -section */}
          <div className='container-text'>
              <span>WELCOME TO MY WORLD</span>
                    <h1>Hi,I’m Dinesh R  <TypeWriter data={typeWriter} /></h1>
                   
                    
              <p >I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                
              <div>
                  <span>FIND WITH ME</span>
                  <div>
                      
                  </div>
              </div>
              
                </div>
                {/* right-section */}
          <div>
              <div>
              <img src={profile} alt=""  className='profile-pic'/>
             </div>
              
          </div>
          </Zoom>
      
            </div>
           
  )
}

export default Home
