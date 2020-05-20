import React from 'react';
import { Card } from 'react-reused-components';

const Shoppingcard = () => {
  return (
    <>
    <div style={{ display: 'flex', textAlign:'center' }}>
      <Card
        productTitle='cold fashion'
        productPrice='6666'
        src='https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412551/E-commerce%20landing%20page/products-showcase/product-1-img_3x.jpg'
      >
        Buy Now
      </Card>
      <Card
        productTitle='cold fashion'
        productPrice='6666'
        src='https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-2-img_3x.jpg'
      >
        Buy Now
      </Card>
      <Card
        productTitle='cold fashion'
        productPrice='6666'
        src='https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-3-img_3x.jpg'
      >
        Buy Now
      </Card>
      <Card
        productTitle='cold fashion'
        productPrice='6666'
        src='https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-4-img_3x.jpg'
      >
        Buy Now
      </Card>
       </div>
      <br />
      <br />
      <br />
      <br />
   </>
  );
};

export default Shoppingcard;
