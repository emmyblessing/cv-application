import React from 'react';
import '../styles.css';

const GeneralInfo = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 p-4'>
            <div className='text-center mt-2 p-image'>
              <img src='./pics.jpg' className='img-fluid rounded-circle' alt='PROFILE PICS'/>
              <h5 className='text-white mt-2'>Oguntuase Emmanuel O.</h5>
              <p className='text-white'>Web Developer</p>
            </div>
            <div className='info table-responsive'>
              <hr />
              <h5 className='text-center'>PERSONAL INFORMATION</h5>
              <hr />
              <table className='table  table-borderless text-white'>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>Oguntuase Emmanuel </td>
                  </tr>
                  <tr>
                    <td>DOB:</td>
                    <td>4th December 1994</td>
                  </tr>
                  <tr>
                    <td>Sex:</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td>Religion:</td>
                    <td>Christianity</td>
                  </tr>
                  <tr>
                    <td>Nationality:</td>
                    <td>Nigerian</td>
                  </tr>
                  <tr>
                    <td>Relationship:</td>
                    <td>Single</td>
                  </tr>
                </tbody>
              </table>
              <div className='mt-4'>
                <hr />
                  <h5 className='text-center'>CONTACT INFORMATION</h5>
                <hr />
              </div>
              
              <table className='table table-responsive table-borderless text-white'>
                <tbody>
                  <tr>
                    <td>Address:</td>
                    <td>+23408131172378 </td>
                  </tr>
                  <tr>
                    <td>TEL.:</td>
                    <td>+23408131172378 </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>emmanuelolawole78@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default GeneralInfo;
