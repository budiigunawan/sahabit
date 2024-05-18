// import { useState } from 'react';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Habits } from './components/habits';

type Habit = {
  name: string;
  category: string;
  variants: HabitVariant[];
  status: string | undefined;
  habitDone: HabitDone | null;
};

type HabitVariant = {
  name: string;
  levels: VariantLevel[];
};

type VariantLevel = {
  level: string;
  name: string;
};

type HabitDone = {
  variantName: string;
  selectedLevel: VariantLevel | null;
};

function App() {
  // const [point, setPoint] = useState<number>(3);
  // const [habits, setHabits] = useState<Habit[]>([]);
  const point = 3;
  const habits: Habit[] = [
    {
      name: 'Exercise',
      category: 'body',
      variants: [
        {
          name: 'Push up',
          levels: [
            { level: 'gold', name: '15 times' },
            { level: 'silver', name: '10 times' },
            { level: 'bronze', name: '5 times' },
          ],
        },
        {
          name: 'Jogging',
          levels: [
            { level: 'gold', name: '5 km' },
            { level: 'silver', name: '2.5 km' },
            { level: 'bronze', name: '1 km' },
          ],
        },
        {
          name: 'Cycling',
          levels: [
            { level: 'gold', name: '60 minutes' },
            { level: 'silver', name: '30 minutes' },
            { level: 'bronze', name: '15 minutes' },
          ],
        },
      ],
      status: undefined,
      habitDone: {
        variantName: 'Jogging',
        selectedLevel: {
          level: 'bronze',
          name: '1 km',
        },
      },
    },
    {
      name: 'Study',
      category: 'mind',
      variants: [
        {
          name: 'Read book',
          levels: [
            { level: 'gold', name: '60 minutes' },
            { level: 'silver', name: '30 minutes' },
            { level: 'bronze', name: '15 minutes' },
          ],
        },
        {
          name: 'Leetcode',
          levels: [
            { level: 'gold', name: '3 questions' },
            { level: 'silver', name: '2 questions' },
            { level: 'bronze', name: '1 questions' },
          ],
        },
        {
          name: 'English',
          levels: [
            { level: 'gold', name: '60 minutes' },
            { level: 'silver', name: '30 minutes' },
            { level: 'bronze', name: '15 minutes' },
          ],
        },
      ],
      status: undefined,
      habitDone: {
        variantName: 'Leetcode',
        selectedLevel: {
          level: 'silver',
          name: '2 questions',
        },
      },
    },
    {
      name: 'Ritual',
      category: 'soul',
      variants: [
        {
          name: 'Meditation',
          levels: [
            { level: 'gold', name: '30 minutes' },
            { level: 'silver', name: '15 minutes' },
            { level: 'bronze', name: '5 minutes' },
          ],
        },
        {
          name: 'Yoga',
          levels: [
            { level: 'gold', name: '60 minutes' },
            { level: 'silver', name: '30 minutes' },
            { level: 'bronze', name: '15 minutes' },
          ],
        },
      ],
      status: undefined,
      habitDone: {
        variantName: 'Meditation',
        selectedLevel: {
          level: 'gold',
          name: '30 minutes',
        },
      },
    },
  ];

  return (
    <>
      <Navbar />
      <Header point={point} habitsCounter={habits.length} />
      <Habits data={habits} />
    </>
  );
}

export default App;
