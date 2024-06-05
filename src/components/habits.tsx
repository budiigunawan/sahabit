import { useState } from 'react';
import { Link, useRevalidator } from 'react-router-dom';
import { deleteHabit, skipHabit } from '../habits';
import { Habit } from '../types/habit-type';

import { EmptyHabit } from './empty-habit';
import { HabitCard } from './habit-card';
import { DeleteModal } from './delete-modal';
import { SkipModal } from './skip-modal';
import { DoModal } from './do-modal';

type HabitsProps = {
  habits: Habit[];
  isAddHabitDisabled: boolean;
};

export const Habits = ({ habits, isAddHabitDisabled }: HabitsProps) => {
  const [deleteHabitId, setDeleteHabitId] = useState<string>('');
  const [skipHabitId, setSkipHabitId] = useState<string>('');
  const [selectedHabit, setSelectedHabit] = useState<Habit>();
  const revalidator = useRevalidator();

  const handleDeleteHabit = async () => {
    await deleteHabit(deleteHabitId);
    revalidator.revalidate();
  };

  const handleSkipHabit = async () => {
    await skipHabit(skipHabitId);
    (document?.getElementById('skip-modal') as HTMLDialogElement).close();
    revalidator.revalidate();
  };

  return (
    <div className='py-3 px-5'>
      {habits?.length ? (
        habits?.map((habit, index) => (
          <HabitCard
            key={index}
            habit={habit}
            setDeleteHabitId={setDeleteHabitId}
            setSkipHabitId={setSkipHabitId}
            setSelectedHabit={setSelectedHabit}
          />
        ))
      ) : (
        <EmptyHabit />
      )}
      <DeleteModal handleDelete={handleDeleteHabit} />
      <SkipModal handleSkip={handleSkipHabit} />
      <DoModal selectedHabit={selectedHabit!} />
      <Link
        to={isAddHabitDisabled ? '#' : '/add-habit'}
        className={`btn btn-success w-full mt-8 text-white ${
          isAddHabitDisabled && 'btn-disabled'
        }`}
      >
        Add habit
      </Link>
    </div>
  );
};
