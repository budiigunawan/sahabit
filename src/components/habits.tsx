import { EmptyHabit } from './empty-habit';
import { HabitCard } from './habit-card';
import { Habit } from '../types/habit-type';
import { AddHabitModal } from './add-habit-modal';

type HabitsProps = {
  habits: Habit[];
};

export const Habits = ({ habits }: HabitsProps) => {
  const handleOpenAddHabitModal = () => {
    (
      document?.getElementById('add-habit-modal') as HTMLDialogElement
    ).showModal();
  };

  return (
    <div className='max-w-2xl mx-auto py-3 px-5'>
      {habits?.length ? (
        habits?.map((habit, index) => <HabitCard key={index} habit={habit} />)
      ) : (
        <EmptyHabit />
      )}
      <AddHabitModal />
      <button
        onClick={handleOpenAddHabitModal}
        className='btn btn-success w-full mt-8 text-white'
      >
        Add habit
      </button>
    </div>
  );
};
