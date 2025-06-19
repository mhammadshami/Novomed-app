import React from "react";
import BoardColumnHead from "./boardColumnHead/BoardColumnHead";
import TaskCard from "./taskCard/TaskCard";

const BoardColumnComponent = () => {
  return (
    <div className="w-[280px]">
      <BoardColumnHead />

      <div className="flex flex-col gap-5 mt-6">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default BoardColumnComponent;
