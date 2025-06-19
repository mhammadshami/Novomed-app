import React from "react";
import BoardColumnHead from "./boardColumnHead/BoardColumnHead";
import TaskCard from "./taskCard/TaskCard";
import useModalStore from "@/store/useModalStore";

const BoardColumnComponent = () => {
  return (
    <div className="w-[280px]">
      <BoardColumnHead />

      <div className="flex flex-col gap-5 mt-6">
        <TaskCard />
        <TaskCard />
        
        <button onClick={() => useModalStore.getState().openModal('add-task')}>+ Task</button>
      </div>
    </div>
  );
};

export default BoardColumnComponent;
