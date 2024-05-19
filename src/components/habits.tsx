import { EmptyHabit } from './empty-habit';
import { HabitCard } from './habit-card';
import { Habit } from '../types/habit-type';

type HabitsProps = {
  data: Habit[];
};

export const Habits = ({ data }: HabitsProps) => {
  return (
    <div className='max-w-2xl mx-auto py-3 px-5'>
      {data?.length ? (
        data?.map((habit, idx) => <HabitCard key={idx} habit={habit} />)
      ) : (
        <EmptyHabit />
      )}
      <button className='btn btn-success w-full mt-8'>Add habit</button>
    </div>
  );
};
