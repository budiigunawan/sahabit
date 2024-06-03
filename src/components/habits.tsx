import { EmptyHabit } from './empty-habit';
import { HabitCard } from './habit-card';
import { Habit } from '../types/habit-type';

type HabitsProps = {
  habits: Habit[];
};

export const Habits = ({ habits }: HabitsProps) => {
  return (
    <div className='py-3 px-5'>
      {habits?.length ? (
        habits?.map((habit, index) => <HabitCard key={index} habit={habit} />)
      ) : (
        <EmptyHabit />
      )}
      <button className='btn btn-success w-full mt-8 text-white'>
        Add habit
      </button>
    </div>
  );
};
