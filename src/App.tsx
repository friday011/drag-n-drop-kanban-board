import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { KanbanBoard } from "./components/kanban-board";

const App = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  return (
    <main className="w-full min-h-screen text-white bg-black">
      <DndContext sensors={sensors} collisionDetection={closestCorners}>
        <KanbanBoard />
      </DndContext>
    </main>
  );
};

export default App;
