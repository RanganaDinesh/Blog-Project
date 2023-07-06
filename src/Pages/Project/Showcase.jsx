import React from 'react'
import Fade from 'react-reveal/Fade';
import './Showcase.css'
import image from '../../projectimages/Screenshot 2023-07-06 140251.png'
import image1 from '../../projectimages/Screenshot 2023-06-20 090927.png'
import image2 from '../../projectimages/NHXH.png'
import Button from '@mui/material/Button';

const Showcase = () => {
  return (
      <> <h2 className='project-title' style={{textAlign:'center'}}>PROJECTS</h2>
          <div className='showcase1'>
              
          <Fade bottom>
         
             <div className='showcase-container'>
                
                     <div className='showcase-set'>
                        <img src={image2} alt="" className='img-view' />
                         <div className='btn-view'>
                             <a href="https://sparkly-sable-e2ee8b.netlify.app/">
                       <Button variant="contained" disableElevation className='web-btn'>
                      WEB VIEW <span className='arrow'> &nbsp;  &#10140;</span>
                                 </Button>
                                 </a>

                       </div>
                     </div>
                     <div className='showcase-set1' ></div>
               
            </div>
            </Fade>
          
          <Fade bottom>
       
              <div className='showcase-container'>
                 
                      <div className='showcase-set'>
                         <img src={image1} alt="" className='img-view' />
                          <div className='btn-view'>
                              <a href="https://verdant-arithmetic-81f151.netlify.app/">
                        <Button variant="contained" disableElevation className='web-btn'>
                       WEB VIEW <span className='arrow'> &nbsp;  &#10140;</span>
                                  </Button>
                                  </a>

                        </div>
                      </div>
                      <div className='showcase-set1' ></div>
                
             </div>
             </Fade>
        
          <Fade bottom>
             
              <div className='showcase-container'>
                 
                      <div className='showcase-set'>
                         <img src={image} alt="" className='img-view' />
                          <div className='btn-view'>
                              <a href="https://sparkly-sable-e2ee8b.netlify.app/Bollywood">
                        <Button variant="contained" disableElevation className='web-btn'>
                       WEB VIEW <span className='arrow'> &nbsp;  &#10140;</span>
                                  </Button>
                                  </a>

                        </div>
                      </div>
                      <div className='showcase-set1' ></div>
                
             </div>
             </Fade>
                      
             
          </div>
          <marquee behavior="scroll"  width="100%" direction="right" scrollamount="15">
              <ul type='none' className='skills'>
               
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp;  MONGODB</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; EXPRESS.JS </span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; NODE.JS</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; REDUX</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; REACT.JS</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; VENNALA JAVASCRIPT</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; BOOTSRAP 4 & 5</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; CSS 3</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; HTML 5</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp;  MONGODB</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; EXPRESS.JS </span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; NODE.JS</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; REDUX</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; REACT.JS</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; VENNALA JAVASCRIPT</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; BOOTSRAP 4 & 5</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; CSS 3</span></i></li>
                <li>  <i class="fa fa-check-circle" style={{color:'green'}}><span style={{color:'black'}}> &nbsp; HTML 5</span></i></li>
              </ul>
          </marquee>
      </>
  )
}

export default Showcase
