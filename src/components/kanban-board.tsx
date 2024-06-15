import {
  SortableContext,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";

import { BoardColumn } from "./board-column";

const KanbanBoard = ({
  boards
}: {
  boards: {
    id: string;
    title: string;
  }[];
}) => {
  const items = boards.map(board => board.id);

  return (
    <SortableContext items={items} strategy={horizontalListSortingStrategy}>
      <div className="flex pb-8 space-x-4 overflow-x-auto">
        {boards.map(board => (
          <BoardColumn key={board.id} board={board} />
        ))}
      </div>
    </SortableContext>
  );
};

export { KanbanBoard };
