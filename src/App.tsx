import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";

import { KanbanBoard } from "./components/kanban-board";
import { BoardColumn } from "./components/board-column";
import { BoardColumnItem } from "./components/board-column-item";
import { useStore } from "./store";

const App = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const boards = useStore(state => state.boards);

  const activeBoard = useStore(state => state.activeBoard);
  const setActiveBoard = useStore(state => state.setActiveBoard);

  const activeTask = useStore(state => state.activeTask);
  const setActiveTask = useStore(state => state.setActiveTask);

  const onDragStart = (event: DragStartEvent) => {
    console.log("onDragStart", event);

    if (event.active.data.current?.type === "board") {
      setActiveBoard(event.active.data.current.board);
    }

    if (event.active.data.current?.type === "task") {
      setActiveTask(event.active.data.current.task);
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    console.log("onDragEnd", event);

    setActiveBoard(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    // const isActiveTask = active.data.current?.type === "task"
    // const isActiveBoard = active.data.current?.type === "board"
  };

  return (
    <main className="w-full min-h-screen px-8 py-20 overflow-x-auto text-white bg-black">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <KanbanBoard boards={boards} />
        <DragOverlay>
          {activeBoard && <BoardColumn board={activeBoard} />}
          {activeTask && <BoardColumnItem task={activeTask} />}
        </DragOverlay>
      </DndContext>
    </main>
  );
};

export default App;
