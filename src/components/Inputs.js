import React from 'react';
import { Input } from 'react-reused-components';

const Inputs = () => {
    return (
        <div style={{ marginLeft:'500px', marginRight:'500px'}}>
        <Input 
        type='text' 
        placeholder='placeholder' 
        label="Username"
      />
      </div>
    );
};

export default Inputs;