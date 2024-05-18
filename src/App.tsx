import { useState } from 'react';
import { Header } from './components/header';
import { Navbar } from './components/navbar';

type Habit = {
  name: string;
  category: string;
  variants: HabitVariant[];
};

type HabitVariant = {
  name: string;
  levels: VariantLevel[];
};

type VariantLevel = {
  level: string;
  name: string;
};

function App() {
  const [point, setPoint] = useState<number>(3);
  const [habits, setHabits] = useState<Habit[]>([]);

  return (
    <>
      <Navbar />
      <Header point={point} habitsCounter={habits.length} />
    </>
  );
}

export default App;
