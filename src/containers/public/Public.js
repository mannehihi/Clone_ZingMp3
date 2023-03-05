import React from "react";
import { Outlet } from "react-router-dom";
import { SlideBarLeft, SlideBarRight } from "../../component";

function Public() {
  return (
    <div className="w-full flex">
      <div className="w-[240px] flex-none">
        <SlideBarLeft />
      </div>

      <div className="flex-auto">
        <Outlet />
      </div>

      <div className="w-[329px] flex-none">
        <SlideBarRight />
      </div>

    </div>
  );
}

export default Public;

