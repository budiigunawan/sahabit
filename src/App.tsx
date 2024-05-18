import { useState } from 'react';
import { Header } from './components/header';
import { Navbar } from './components/navbar';

type Task = {
  name: string;
  category: string;
  variants: TaskVariant[];
};

type TaskVariant = {
  name: string;
  levels: VariantLevel[];
};

type VariantLevel = {
  level: string;
  name: string;
};

function App() {
  const [point, setPoint] = useState<number>(3);
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Navbar />
      <Header point={point} tasksCounter={tasks.length} />
    </>
  );
}

export default App;
