"use client";
import React from "react";
import useModalStore from "@/store/useModalStore";
import AddTaskModal from "./addTaskModal/AddTaskModal";
import EditTaskModal from "./editTaskModal/EditTaskModal";
import DeleteTaskModal from "./deleteTaskModal/DeleteTaskModal";
import AddColumnModal from "./addColumnModal/AddColumnModal";
import { AnimatePresence, motion } from "framer-motion";
import AddBoardModal from "./addBoardModal/AddBoardModal";
import DeleteBoardModal from "./deleteBoardModal/DeleteBoardModal";

const ModalRenderer = () => {
  const { isOpen, type, data, closeModal } = useModalStore();

  if (!open || !type) return null;

  return (
    <AnimatePresence>
      {isOpen && type && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className="flex items-center justify-center min-h-full p-4">
            <motion.div
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              className="relative w-full max-w-lg p-6 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:p-8 dark:bg-gray-800"
            >
              {type === "add-task" && <AddTaskModal onClose={closeModal} />}
              {type === "add-board" && <AddBoardModal onClose={closeModal} />}
              {type === "edit-task" && (
                <EditTaskModal task={data} onClose={closeModal} />
              )}
              {type === "add-column" && <AddColumnModal onClose={closeModal} />}
              {type === "delete-board" && (
                <DeleteBoardModal boardId={data} onClose={closeModal} />
              )}
              {type === "delete-task" && (
                <DeleteTaskModal taskId={data} onClose={closeModal} />
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalRenderer;
