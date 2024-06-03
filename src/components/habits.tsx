import { EmptyHabit } from './empty-habit';
import { HabitCard } from './habit-card';
import { Habit } from '../types/habit-type';
import { Link } from 'react-router-dom';

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
      <Link to='/add-habit' className='btn btn-success w-full mt-8 text-white'>
        Add habit
      </Link>
    </div>
  );
};
