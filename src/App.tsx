// import { useState } from 'react';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Habits } from './components/habits';

type Habit = {
  name: string;
  category: string;
  variants: HabitVariant[];
  status: string;
  selectedVariant: HabitVariant | null;
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
  // const [point, setPoint] = useState<number>(3);
  // const [habits, setHabits] = useState<Habit[]>([]);
  const point = 3;
  const habits: Habit[] = [];

  return (
    <>
      <Navbar />
      <Header point={point} habitsCounter={habits.length} />
      <Habits />
    </>
  );
}

export default App;
