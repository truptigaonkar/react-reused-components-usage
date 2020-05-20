import React from 'react';
import { Sidebar } from 'react-reused-components';

const Bar = () => {
    return (
      <div style={{marginTop:'-10px'}}>
<Sidebar
      src='https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/suit-collections/suit-collection-img_3x.jpg'
      header='My App'
      Tab1='Form'
      Tab2='Shortcuts'
      Tab3='Overview'
      Tab4='Events'
      Tab5='About'
      Tab6='Services'
      Tab7='Contacts'
    />  
    </div>  
    );
};

export default Bar;