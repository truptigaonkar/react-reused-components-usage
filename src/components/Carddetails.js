import React from 'react';
import { ProductDetails } from 'react-reused-components';

const Carddetails = () => {
  return (
    <>
     
    <div style={{ display: 'flex', textAlign:'center' }}>
      <ProductDetails
        src='https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg'
        productTitle='Tablet'
        productPrice='1000 SEK'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        defaultValue='1'
        min='1'
        max='100'
      />
            <ProductDetails
        src='http://img5a.flixcart.com/image/tablet/e/b/d/d-link-d100-400x400-imae9fb8pcg5mwgu.jpeg'
        productTitle='Tablet'
        productPrice='1000 SEK'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        defaultValue='1'
        min='1'
        max='100'
      />
       </div>
      <br />
      <br />
      <br />
      <br />
   </>
  );
};

export default Carddetails;
