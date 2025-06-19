'use client'
import SelectInput from "@/components/ui/forms/SelectInput";
import React, { useState } from "react";

interface AddTaskModalProps {
  onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = () => {
 const [status, setStatus] = useState("todo");

  const options = [
    { label: "Todo", value: "todo" },
    { label: "Doing", value: "doing" },
    { label: "Done", value: "done" },
  ];

  return (
    <div className="h-[400px]">
      <SelectInput
        label="Dropdown (Active)"
        options={options}
        value={status}
        onChange={(v) => setStatus(v)}
      />
    </div>
  );
};

export default AddTaskModal;
