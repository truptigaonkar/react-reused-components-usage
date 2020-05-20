import React from 'react';
import { Alert } from 'react-reused-components';

const Alerts = () => {
    return (
        <div style={{ marginLeft:'100px', width:'110%'}}>
          <table style={{textAlign:'center'}}>
        <thead>
          <tr>
            <th>Alerts</th>
            <th></th>
          
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Primary</td>
            <td>
            <Alert alertStyle='alert--primary'>primary!</Alert>  
            </td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>
            <Alert alertStyle='alert--secondary'>secondary!</Alert>  
            </td>
          </tr>
          <tr>
            <td>Success</td>
            <td>
            <Alert alertStyle='alert--success'>success!</Alert>  
            </td>
          </tr>
          <tr>
            <td>Warning</td>
            <td>
            <Alert alertStyle='alert--warning'>warning!</Alert>  
            </td>
          </tr>
          <tr>
            <td>Danger</td>
            <td>
            <Alert alertStyle='alert--danger'>danger!</Alert>  
            </td>
          </tr>
          <tr>
            <td>Info</td>
            <td>
            <Alert alertStyle='alert--info'>info!</Alert>  
            </td>
          </tr>
          <tr>
            <td>White</td>
            <td>
            <Alert alertStyle='alert--white'>white!</Alert>  
            </td>
          </tr>
          <tr>
            <td>Dark</td>
            <td>
            <Alert alertStyle='alert--dark'>dark!</Alert>  
            </td>
          </tr>
          
        </tbody>
      </table><br/><br/><br/><br/>
        </div>
    );
};

export default Alerts;