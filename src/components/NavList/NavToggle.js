import React from 'react';

const NavToggle = props => {
  const toggleClass = props.isShow ? 'showClose' : '';
  return  (
    <div className={`m_navToggle ${toggleClass}`} onClick={props.onToggle}>
      <span className="firstLine"></span>
      <span className="secondLine"></span>
      <span className="thirdLine"></span>
    </div>
  );
};

export default NavToggle;
