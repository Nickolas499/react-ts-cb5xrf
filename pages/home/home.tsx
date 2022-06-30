import * as React from 'react';
import './home.css';
import Profileside from '../../components/profileside/profileside'
import Post from '../../components/post/post'
import Rightside from '../../components/rightside/rightside'
const Home = () => {
  return (
    <div className="home">
      <Profileside />
      <Post/>
      <Rightside/>
      
    </div>
  );
};

export default Home;
