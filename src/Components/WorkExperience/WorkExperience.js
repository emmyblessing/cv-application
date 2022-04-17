import React from 'react';
import '../styles.css';

const WorkExperience = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mt-5 details'>
            <h3 className='fw-bold'>PRACTICAL EXPERIENCE</h3>
            <table className='table table-responsive table-borderless'>
              <tbody>
                <tr>
                  <td>2013<br />2014</td>
                    <td>
                      <b>CKC Youth Computer Institute, <br /> Ado - Ekiti, Ekiti State</b><br />
                      <p><b>Position:</b> IT Consultant</p>
                      <p>Worked on training students on how to use MS Office Suite and Graphics Software</p>
                  </td>
                </tr>
                <tr>
                  <td>2015<br />Present</td>
                    <td>
                      <b>CKC Youth Computer Institute, <br /> Ado - Ekiti, Ekiti State</b><br />
                      <p><b>Position:</b> Web Instructor</p>
                      <p>Trained students on how to use HTML, CSS, PHP, Javascript & Bootstrap</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience;
