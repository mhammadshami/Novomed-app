import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import React from "react";
import Switch from "../../Switch";

const ModeToggler = () => {
  return (
    <div className="flex items-center mt-auto gap-[23.67px] ms-[24px] me-[25px]">
      <SunIcon />
      <Switch isOn={true} 
      //onToggle={() => {}}
      // 
      />
      <MoonIcon />
    </div>
  );
};

export default ModeToggler;
