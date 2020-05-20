import React from 'react';
import { Cart } from 'react-reused-components';

const Shoppingcart = () => {
  return (
    <>
     <Cart
        cartLength='1'
        src='https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg'
        title='Tablet'
        price='400'
        quantity='4'
      />
   </>
  );
};

export default Shoppingcart;
