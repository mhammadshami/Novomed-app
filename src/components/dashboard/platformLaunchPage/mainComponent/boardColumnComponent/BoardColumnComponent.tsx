"use client";
import React, { useState } from "react";
import BoardColumnHead from "./boardColumnHead/BoardColumnHead";
import TaskCard from "./taskCard/TaskCard";
import useModalStore from "@/store/useModalStore";
import SelectInput from "@/components/ui/forms/SelectInput";
import TextInput from "@/components/ui/forms/TextInput";
import SubtaskCheckbox from "@/components/ui/forms/SubtaskCheckbox";

const BoardColumnComponent = () => {
  const [status, setStatus] = useState("");
  const [checked, setChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  const options = [
    { label: "Todo", value: "todo" },
    { label: "Doing", value: "doing" },
    { label: "Done", value: "done" },
  ];

  return (
    <div className="w-[280px]">
      <BoardColumnHead />
      <SelectInput
        label="Dropdown (Active)"
        options={options}
        value={status}
        onChange={(v) => setStatus(v)}
      />
      <TextInput label="Text Field" />
      <SubtaskCheckbox checked={checked} label="First name" onChange={handleToggleCheckbox} />
      <div className="flex flex-col gap-5 mt-6">
        <TaskCard />
        <TaskCard />

        <button onClick={() => useModalStore.getState().openModal("delete-task")}>
          + Task
        </button>
      </div>
    </div>
  );
};

export default BoardColumnComponent;
