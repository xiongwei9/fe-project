import React, { useState } from 'react';

import NavToggle from './NavToggle';

const NavList = props => {
  const [showList, setShowList] = useState(false);
  const onToggle = () => setShowList(!showList);

  const list = !showList || !Array.isArray(props.linkList) ? null : props.linkList.map(() => {
    return null;
  });
  return (
    <div className="m_navList">
      <NavToggle onToggle={onToggle} isShow={showList} />
      {list}
    </div>
  );
};

export default NavList;
