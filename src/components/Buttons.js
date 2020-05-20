import React from 'react';
import { Button } from 'react-reused-components';

const Form = () => {
  return (
    <div style={{ marginLeft:'50px', width:'120%'}}>
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Solid Buttons with different Sizes</th>
            <th>Outlined Buttons with different Sizes</th>
          
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary</td>
            <td>
              <Button buttonStyle='btn--primary--solid'>small</Button> <Button buttonStyle='btn--primary--solid' buttonSize='large'>Large</Button><Button buttonStyle='btn--primary--solid' buttonSize='block'>Block</Button>
            </td>
            <td>
              <Button buttonStyle='btn--primary--outline'>small</Button> <Button buttonStyle='btn--primary--outline' buttonSize='large'>Large</Button> <Button buttonStyle='btn--primary--outline' buttonSize='block'>Block</Button>
            </td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>
              <Button buttonStyle='btn--secondary--solid'>small</Button> <Button buttonStyle='btn--secondary--solid' buttonSize='large'>Large</Button> <Button buttonStyle='btn--secondary--solid' buttonSize='block'>Block</Button>
            </td>
            <td>
              <Button buttonStyle='btn--secondary--outline'>small</Button> <Button buttonStyle='btn--secondary--outline' buttonSize='large'>Large</Button> <Button buttonStyle='btn--secondary--outline' buttonSize='block'>Block</Button>
            </td>
          </tr>
          <tr>
            <td>Success</td>
            <td>
              <Button buttonStyle='btn--success--solid'>small</Button> <Button buttonStyle='btn--success--solid' buttonSize='large'>Large</Button> <Button buttonStyle='btn--success--solid' buttonSize='block'>Block</Button>
            </td>
            <td>
              <Button buttonStyle='btn--success--outline'>small</Button> <Button buttonStyle='btn--success--outline' buttonSize='large'>Large</Button> <Button buttonStyle='btn--success--outline' buttonSize='block'>Block</Button>
            </td>
          </tr> 
          <tr>
            <td>Warning</td>
            <td>
              <Button buttonStyle='btn--warning--solid'>small</Button> <Button buttonStyle='btn--warning--solid' buttonSize='large'>Large</Button> <Button buttonStyle='btn--warning--solid' buttonSize='block'>Block</Button>
            </td>
            <td>
              <Button buttonStyle='btn--warning--outline'>small</Button> <Button buttonStyle='btn--warning--outline' buttonSize='large'>Large</Button> <Button buttonStyle='btn--warning--outline' buttonSize='block'>Block</Button>
            </td>
          </tr> 
          <tr>
            <td>Danger</td>
            <td>
              <Button buttonStyle='btn--danger--solid'>small</Button> <Button buttonStyle='btn--danger--solid' buttonSize='large'>Large</Button> <Button buttonStyle='btn--danger--solid' buttonSize='block'>Block</Button>
            </td>
            <td>
              <Button buttonStyle='btn--danger--outline'>small</Button> <Button buttonStyle='btn--danger--outline' buttonSize='large'>Large</Button> <Button buttonStyle='btn--danger--outline' buttonSize='block'>Block</Button>
            </td>
          </tr> 
          <tr>
            <td>Info</td>
            <td>
              <Button buttonStyle='btn--info--solid'>small</Button> <Button buttonStyle='btn--info--solid' buttonSize='large'>Large</Button> <Button buttonStyle='btn--info--solid' buttonSize='block'>Block</Button>
            </td>
            <td>
              <Button buttonStyle='btn--info--outline'>small</Button> <Button buttonStyle='btn--info--outline' buttonSize='large'>Large</Button> <Button buttonStyle='btn--info--outline' buttonSize='block'>Block</Button>
            </td>
          </tr> 
          <tr>
            <td>Dark</td>
            <td>
              <Button buttonStyle='btn--dark--solid'>small</Button> <Button buttonStyle='btn--dark--solid' buttonSize='large'>Large</Button> <Button buttonStyle='btn--dark--solid' buttonSize='block'>Block</Button>
            </td>
            <td>
              <Button buttonStyle='btn--dark--outline'>small</Button> <Button buttonStyle='btn--dark--outline' buttonSize='large'>Large</Button> <Button buttonStyle='btn--dark--outline' buttonSize='block'>Block</Button>
            </td>
          </tr>
        </tbody>
      </table><br/><br/><br/><br/>
    </div>
  );
};

export default Form;
