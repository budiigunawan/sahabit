import { Header } from '../components/header';
import { Habits } from '../components/habits';
import { Habit } from '../types/habit-type';
import { habitSeed } from '../data';
import { Layout } from '../components/layout';

export const Root = () => {
  const point = 3;
  const habits: Habit[] = habitSeed;

  return (
    <Layout>
      <Header point={point} habitsCounter={habits.length} />
      <Habits habits={habits} />
    </Layout>
  );
};
