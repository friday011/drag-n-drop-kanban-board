import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { BoardColumnItem } from "./board-column-item";
import { useStore } from "../store";

const BoardColumn = ({
  board
}: {
  board: {
    id: string;
    title: string;
  };
}) => {
  const tasks = useStore(state => state.tasks);
  const boardTasks = tasks.filter(task => task.columnId === board.id);

  const items = boardTasks.map(task => task.id);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: board.id,
      data: {
        type: "board",
        board
      }
    });

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
      className="flex flex-col h-full p-4 space-y-4 bg-black border border-gray-800 rounded w-80 shrink-0"
    >
      <h3 className="text-sm font-medium text-gray-400">{board.title}</h3>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col flex-1 space-y-4">
          {boardTasks.map(task => (
            <BoardColumnItem key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
      <button className="p-3 bg-gray-900 border border-gray-800 rounded">
        Add new task
      </button>
    </div>
  );
};

export { BoardColumn };
