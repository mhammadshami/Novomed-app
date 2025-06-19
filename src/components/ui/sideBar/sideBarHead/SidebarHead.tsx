import LogoIcon from "@/components/icons/LogoIcon";
import React from "react";

const SidebarHead = () => {
  return (
    <div className="p-[32.78px_34px_54px]">
      <div className="flex gap-[15.76px]">
        <div className="h-[25px] flex gap-[3px]">
          <span className="rounded-[2px] w-[6px] bg-primary h-full block" />
          <span className="rounded-[2px] w-[6px] bg-primary/75 h-full block" />
          <span className="rounded-[2px] w-[6px] bg-primary/50 h-full block" />
        </div>
        <LogoIcon />
      </div>
    </div>
  );
};

export default SidebarHead;
