import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";

import { KanbanBoard } from "./components/kanban-board";
import { DEFAULT_COLUMNS } from "./constants";

const App = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const onDragStart = (event: DragStartEvent) => {
    console.log("onDragStart", event);
  };

  const onDragEnd = (event: DragEndEvent) => {
    console.log("onDragEnd", event);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    // const isActiveTask = active.data.current?.type === "task"
  };

  return (
    <main className="w-full min-h-screen px-8 py-20 overflow-x-auto text-white bg-black">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <KanbanBoard boards={DEFAULT_COLUMNS} />
      </DndContext>
    </main>
  );
};

export default App;
