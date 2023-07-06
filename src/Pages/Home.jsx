import React from 'react'
import profile from ' ../../../public/Picsart_23-07-04_17-12-15-109.jpg'
import './Home.css'
import Fade from 'react-reveal/Fade';
import TypeWriter from '../Pages/Font/Textanimation'


const typeWriter = ["FRONT-END DEVELOPER","WEB DEVELOPER", "MERN STACK DEVELOPER", "REACTJS DEVELOPER"];
const Home = () => {
    return (
       
        <div id='section-container'>
            
            {/* left -section */}
           
            <div className='container-text'>
            <Fade bottom>
                <div>
                <span>WELCOME TO MY WORLD</span>
                <h1>Hi,I’m Dinesh RANGANA  <br /> <TypeWriter data={typeWriter} /></h1>

                <p >I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                </div>
            </Fade>
                <Fade bottom>
              <div>
                  <span>FIND WITH ME</span>
                        <div>
                        <div className='conatct-icons'>
                            <div className='box-icon box1'><i class="fa fa-google"></i></div>
                            <div className='box-icon box2'><a href="https://www.linkedin.com/feed/" class="fa fa-linkedin"></a></div>
                            <div className='box-icon box3'><a href="https://github.com/RanganaDinesh" class="fa fa-github"></a></div>
                        </div>
                      
                  </div>
                        </div>
                        </Fade>
              
                </div>
                {/* right-section */}
                <div>
                <Fade bottom>
              <div className='frame'>
                        <img src={profile} alt="" className='profile-pic' />
                        <div  className='profile-pic1'></div>
                      
                    </div>
                    <div className='conatct-icons  hideicons' >
                            <div className='box-icon box1'><i class="fa fa-google"></i></div>
                            <div className='box-icon box2'><a href="https://www.linkedin.com/feed/" class="fa fa-linkedin"></a></div>
                            <div className='box-icon box3'><a href="https://github.com/RanganaDinesh" class="fa fa-github"></a></div>
                        </div>
                        </Fade>
                </div>
               
          
      
            </div>
           
  )
}

export default Home

