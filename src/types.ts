export interface Board {
  id: string;
  title: string;
}

export interface Task {
  id: string;
  columnId: string;
  task: string;
}
