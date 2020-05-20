import React from 'react';
import { Header } from 'react-reused-components';

const Headerdata = () => {
    return (
      <div style={{marginTop:'-15px'}}>
        <Header
        src='https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg'
        heading='Electronic collection 2020'
        mainHeading='welcome to brandy unique store'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      >
        shop now
      </Header>
      </div>
    );
};

export default Headerdata;