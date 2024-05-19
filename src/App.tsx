// import { useState } from 'react';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Habits } from './components/habits';
import { Habit } from './types/habit-type';
import { habitSeed } from './data';

function App() {
  // const [point, setPoint] = useState<number>(3);
  // const [habits, setHabits] = useState<Habit[]>([]);
  const point = 3;
  const habits: Habit[] = habitSeed;

  return (
    <>
      <Navbar />
      <Header point={point} habitsCounter={habits.length} />
      <Habits habits={habits} />
    </>
  );
}

export default App;
