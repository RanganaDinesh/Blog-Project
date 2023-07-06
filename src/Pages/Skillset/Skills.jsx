import React from 'react'
import Button from '@mui/material/Button';
import './Skills.css';

const Skills = () => {
  return (
      <>
           <h2 className='skills-title'> E-COMMERCE APP</h2>
      <div className='skill-container'>
             
              <div className='item-container'>
                  <div className='item'>
                      <img src="" alt="" />
                      <div className='btn-hide'>
                      <Button variant="contained" disableElevation style={{backgroundColor:'black'}}  id='cart-btn'>
                     ADD CART <span className='arrow'> &nbsp; &#10140;</span>
                          </Button>
                          </div>

                  </div>
                  
              </div>
              
      </div>
      </>
  )
}

export default Skills
