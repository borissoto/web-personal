import React from "react";
import { Button, Icon } from "antd";
import AgusLogo from "../../../assets/img/png/logo-white.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  // console.log(props);
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className='menu-top'>
      <div className='menu-top__left'>
        <img className='menu-top__left-logo' src={AgusLogo} alt='Boris Soto' />
        <Button type='link' onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>
      <div className='menu-top__right'>
        <Button type='link' onClick={() => console.log("desconectar")}>
          <Icon type='poweroff'></Icon>
        </Button>
      </div>
    </div>
  );
}
