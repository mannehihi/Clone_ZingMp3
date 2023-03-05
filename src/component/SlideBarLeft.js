import React from "react";
import { NavLink } from "react-router-dom";
import { slideBarMenu } from "../ultis/menu";


const SlideBarLeft = () => {
  const  notActiveStyle ='py-2 px-[25px] font-bold text-[#A0A0A0] text-[13px] flex gap-[12px] items-center'
  const  activeStyele ='py-2 px-[25px] font-bold text-[#FFFFFF] text-[13px] flex gap-[12px] items-center'


  return (
    <div className="flex flex-col">
      <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
        <img
          className="w-[120px] h-[40px]"
          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          alt="logo"
        />
      </div>

      <div className="flex flex-col">
        {
          slideBarMenu.map(item => (
            <NavLink
              to={item.path}
              key={item.path}
              end={item.end}
              className={({isActive})=> isActive ? activeStyele : notActiveStyle}
            >
              {item.icons}
              <span>{item.text}</span>

            </NavLink>
          ))
        }
      </div>
    </div>
  );
};

export default SlideBarLeft;
