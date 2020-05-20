import React from 'react';
import { Cart } from 'react-reused-components';

const Shoppingcart = () => {
  return (
    <div style={{marginLeft:'35px', marginRight:'35px'}}>
     <Cart
        cartLength='1'
        src='https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg'
        title='Tablet'
        price='400'
        quantity='4'
      />
   </div>
  );
};

export default Shoppingcart;
