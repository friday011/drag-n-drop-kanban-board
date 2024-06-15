import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import { BoardColumnItem } from "./board-column-item";
import { DEFAULT_TASKS } from "../constants";

const BoardColumn = ({
  board
}: {
  board: {
    id: string;
    title: string;
  };
}) => {
  const tasks = DEFAULT_TASKS.filter(task => task.columnId === board.id);
  const items = tasks.map(task => task.id);
  // const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
      <div className="flex flex-col h-full p-4 space-y-4 border border-gray-800 rounded w-80 shrink-0">
        <h3 className="text-sm font-medium text-gray-400">{board.title}</h3>
        <div className="flex flex-col flex-1 space-y-4">
          {tasks.map(task => (
            <BoardColumnItem key={task.id} task={task} />
          ))}
        </div>
        <button className="p-3 bg-gray-900 border border-gray-800 rounded">
          Add new task
        </button>
      </div>
    </SortableContext>
  );
};

export { BoardColumn };
