import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const BoardColumnItem = ({
  task
}: {
  task: {
    id: string;
    columnId: string;
    task: string;
  };
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="w-full p-4 border border-gray-800 rounded bg-gray-950"
    >
      {task.task}
    </div>
  );
};

export { BoardColumnItem };
