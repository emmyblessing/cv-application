import React from 'react';
import '../styles.css';

const EduExperience = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mt-5 details'>
            <h3 className='fw-bold'>EDUCATIONAL EXPERIENCE</h3>
            <table className='table table-responsive table-borderless'>
              <tbody>
                <tr>
                  <td>2020<br />2022</td>
                    <td>
                      <b>Computer Science (HND)</b><br />
                      <p>The Federal Polytechnic, Ado - Ekiti, Ekiti State</p>
                  </td>
                </tr>
                <tr>
                  <td>2013<br />2016</td>
                    <td>
                      <b>Computer Science (ND)</b><br />
                      <p>The Federal Polytechnic, Ado - Ekiti, Ekiti State</p>
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

export default EduExperience;
