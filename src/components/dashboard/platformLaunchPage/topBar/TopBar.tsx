import DotsIcon from "@/components/icons/DotsIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import PageTitle from "@/components/shared/PageTitle";
import Button from "@/components/ui/Button";
import React from "react";

const TopBar = () => {
  return (
    <header className="bg-white px-[24px] h-[64px] sm:h-[96px] flex items-center justify-between border-b border-secondary">
      <PageTitle text="Platform Launch" />

      <div className="flex items-center gap-[24px]">
        <Button className="flex items-center px-[18px] py-[10px] sm:px-[24px] sm:py-[14px]">
          <div className="leading-[19px] flex items-center">
            <PlusIcon />
            <span className="hidden sm:block">&nbsp;</span>
            <span className="hidden sm:block">Add New Task</span>
          </div>
        </Button>
        <DotsIcon />
      </div>
    </header>
  );
};

export default TopBar;
