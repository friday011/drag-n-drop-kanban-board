import { BoardColumn } from "./board-column";

const KanbanBoard = ({
  boards
}: {
  boards: {
    id: string;
    title: string;
  }[];
}) => {
  return (
    <div className="flex pb-8 space-x-4 overflow-x-auto">
      {boards.map(board => (
        <BoardColumn key={board.id} board={board} />
      ))}
    </div>
  );
};

export { KanbanBoard };
