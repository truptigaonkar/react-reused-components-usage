import React from 'react';
import { Textfield, Input } from 'react-reused-components';

const Inputs = () => {
  return (
    <div style={{ marginLeft: '100px', width: '110%' }}>
      <table>
        <thead>
          <tr>
            <th>Inputs</th>
            <th>Design</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Material design input</td>
            <td>
              <Textfield
                label='Textfield label'
                type='text'
                placeholder='placeholder'
              />
            </td>
          </tr>
          <tr>
            <td>Normal input (text)</td>
            <td>
              <Input label='Text label' type='text' placeholder='placeholder' />
            </td>
          </tr>
          <tr>
            <td>Normal input (textarea)</td>
            <td>
              <Input
                label='Textarea label'
                type='textarea'
                placeholder='placeholder'
              />
            </td>
          </tr>
          <tr>
            <td>Normal input (number)</td>
            <td>
              <Input type='number' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inputs;
