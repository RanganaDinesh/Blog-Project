import React from 'react'
import './Tech.css'
import {
    MDBInput,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import Fade from 'react-reveal/Fade';

const Techs = () => {
    return (
        <>
             <Fade bottom>
            <div style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp8903914.jpg)' }} className='Tech-container'>
          <h2 className='tech-title'>I'M GOOD AT </h2>
      </div>
            <div className='contact'>
            <h2 className='contact-title'>CONTACT ME</h2>
                <form>
                 
        <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
        <MDBInput className='mb-4' type='password' id='fom2Example2' label='Password' />
  
        <MDBRow className='mb-4'>
         <textarea name="" id="" cols="28" rows="10" placeholder='Text  message'></textarea>
         
        </MDBRow>
  
        <MDBBtn type='submit' className='mb-4' block>
         SEND MESSAGE
        </MDBBtn>
  
        <div className='text-center'>
          
  
          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
  
          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
  
          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
  
          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </div>
                </form>
                </div></Fade>
            <Fade bottom>
            
            <div className='footer'>
      
<footer class="text-center text-lg-start bg-white text-muted">
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with me on social networks:</span>
    </div>


   
 
  </section>
 

 
  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3">
     
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">React.js</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Node.js</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Expree.js</a>
          </p>
          <p>
            <a href="#!" class="text-reset">MOngodb</a>
          </p>
        </div>
      

       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i>Dharmavaram , Anantapur</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
           rangana.dinesh09@gmail.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> +19 9390732873</p>
       </div>
        
      </div>
  
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor:'rgba(0, 0, 0, 0.025)'}}>
    ©Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Dinesh R</a>
  </div>
 
</footer>

                </div>
                </Fade>
                
            </>
  
  
     
  )
}

export default Techs
