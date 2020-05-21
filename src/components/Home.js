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
        src='https://3.downloader.disk.yandex.ru/preview/66b89b661b2620f1f94d8ff9b1b8400d5536dd5f82895ebe0bbd54c267dbd55c/5ec63b0f/YG4VDE0r4b3dzmJujZ_82cXSg9m7xEl4r-tS6FcKaG4u_OOE-u0AxCGg6NJhar48q_J6bpmRyOJonT3VoXnDag%3D%3D?uid=0&filename=10.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1280x726'
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
