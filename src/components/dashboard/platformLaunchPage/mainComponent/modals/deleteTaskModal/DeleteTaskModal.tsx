import React from 'react'

interface DeleteTaskModalProps {
  taskId: string;
  onClose: () => void;
}

const DeleteTaskModal:React.FC<DeleteTaskModalProps> = () => {
  return (
    <div>DeleteTaskModal</div>
  )
}

export default DeleteTaskModal 