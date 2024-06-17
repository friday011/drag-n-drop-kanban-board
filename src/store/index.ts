import { create } from "zustand";
import type { Board, Task } from "../types";
import { DEFAULT_COLUMNS, DEFAULT_TASKS } from "../constants";

interface AppState {
  boards: Board[];
  tasks: Task[];
  activeBoard: Board | null;
  activeTask: Task | null;
  setBoards: (boards: Board[]) => void;
  setTasks: (tasks: Task[]) => void;
  setActiveBoard: (board: Board | null) => void;
  setActiveTask: (task: Task | null) => void;
}

const useStore = create<AppState>(set => ({
  boards: DEFAULT_COLUMNS,
  tasks: DEFAULT_TASKS,
  activeBoard: null,
  activeTask: null,
  setBoards: boards => set(() => ({ boards: boards })),
  setTasks: tasks => set(() => ({ tasks: tasks })),
  setActiveBoard: board => set(() => ({ activeBoard: board })),
  setActiveTask: task => set(() => ({ activeTask: task }))
}));

export { useStore };
