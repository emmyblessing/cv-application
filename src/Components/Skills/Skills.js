import React from 'react';
import '../styles.css';

const Skills = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mt-5 details'>
            <h3 className='fw-bold'>SKILLS</h3>
            <b>HTML</b><br />
            <div class="progress">
              <div 
                class="progress-bar" 
                style={{ width: '90%' }} 
                aria-valuemin="0" 
                aria-valuemax="100">
                90%
              </div>
            </div>
            <b>CSS</b><br />
            <div class="progress">
              <div 
                class="progress-bar" 
                style={{ width: '80%' }} 
                aria-valuemin="0" 
                aria-valuemax="100">
                80%
              </div>
            </div>
            <b>PHP</b><br />
            <div class="progress">
              <div 
                class="progress-bar" 
                style={{ width: '60%' }} 
                aria-valuemin="0" 
                aria-valuemax="100">
                60%
              </div>
            </div>
            <b>Javascript</b><br />
            <div class="progress">
              <div 
                class="progress-bar" 
                style={{ width: '50%' }} 
                aria-valuemin="0" 
                aria-valuemax="100">
                50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
