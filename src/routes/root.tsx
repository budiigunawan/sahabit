import { useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getHabits } from '../habits';
import { Header } from '../components/header';
import { Habits } from '../components/habits';
import { Layout } from '../components/layout';
import { Habit } from '../types/habit-type';

async function loader(): Promise<{
  habits: Habit[];
}> {
  const habits = await getHabits();
  return { habits };
}

export const Root = () => {
  const { habits } = useLoaderData() as { habits: Habit[] };

  const getPoint = (levelName?: string) => {
    if (!levelName) return 0;

    if (levelName === 'gold') {
      return 3;
    } else if (levelName === 'silver') {
      return 2;
    } else {
      return 1;
    }
  };

  const point: number = useMemo(() => {
    if (habits.length) {
      let totalPoint: number = 0;

      habits.forEach((habit) => {
        totalPoint =
          totalPoint + getPoint(habit?.habitDone?.selectedLevel?.level);
      });

      return totalPoint;
    }

    return 0;
  }, [habits]);

  const isAddHabitDisabled: boolean = useMemo(() => {
    return habits.length >= 3;
  }, [habits]);

  return (
    <Layout>
      <Header point={point} habitsCounter={habits.length} />
      <Habits habits={habits} isAddHabitDisabled={isAddHabitDisabled} />
    </Layout>
  );
};

Root.loader = loader;
