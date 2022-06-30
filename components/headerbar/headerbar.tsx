import * as React from 'react';
import './headerbar.css';
import {
  GoGear,
  GoCommentDiscussion,
  GoBell,
  GoHome,
  GoPerson,
} from 'react-icons/go';

const Headerbar = () => {
  const logo = 'Hive';
  return (
    <div className="headerbar">
      <div className="logo">{logo}</div>
      <form className="searchbox" action="">
        <input className="search" type="text" placeholder="Type here" />
        <input className="submit" type="submit" value="Search" />
      </form>
      <div className="menu">
      <div className="ico">
          <GoHome />
        </div>
        <div className="ico">
          <GoPerson />
        </div>
        <div className="ico">
          <GoCommentDiscussion />
        </div>
        <div className="ico">
          <GoBell />
        </div>
        <div className="ico">
          <GoGear />
        </div>
      </div>
    </div>
  );
};

export default Headerbar;
