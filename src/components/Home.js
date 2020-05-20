import React from 'react';
import { Header } from 'react-reused-components';

const Home = (props) => {
  const handleOnclick = (e) => {
    e.preventDefault();
    window.location.replace(
      'https://github.com/truptigaonkar/react-reused-components'
    );
  };
  return (
    <div style={{ marginTop: '-15px' }}>
      <Header
        src='https://unik.al/unik_content/uploads/2019/01/1600x900-light-sky-blue-solid-color-background.jpg'
        heading='React Reused Component'
        mainHeading='welcome to my component library'
        description='React reusable components is a React component library that can be used multiple times in your application. `React Reused Components` are served as an npm package - https://www.npmjs.com/package/react-reused-components.
        '
        onClick={handleOnclick}
      >
        Check now
      </Header>
    </div>
  );
};

export default Home;
