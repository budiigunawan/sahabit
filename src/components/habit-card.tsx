import { useMemo } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Habit } from '../types/habit-type';
import { Stamp } from './stamp';
import { Link } from 'react-router-dom';

type HabitCardProps = {
  habit: Habit;
  setDeleteHabitId: (habitId: string) => void;
  setSkipHabitId: (habitId: string) => void;
  setSelectedHabit: (habit: Habit) => void;
};

export const HabitCard = ({
  habit,
  setDeleteHabitId,
  setSkipHabitId,
  setSelectedHabit,
}: HabitCardProps) => {
  const handleOpenDeleteModal = (habitId: string) => {
    setDeleteHabitId(habitId);
    (document?.getElementById('delete-modal') as HTMLDialogElement).showModal();
  };

  const handleOpenSkipModal = (habitId: string) => {
    setSkipHabitId(habitId);
    (document?.getElementById('skip-modal') as HTMLDialogElement).showModal();
  };

  const handleOpenDoModal = (habit: Habit) => {
    setSelectedHabit(habit);
    (document?.getElementById('do-modal') as HTMLDialogElement).showModal();
  };

  const badgeColor = useMemo(() => {
    if (habit.habitDone) {
      if (habit.habitDone.selectedLevel?.level === 'gold') {
        return 'bg-yellow-300';
      } else if (habit.habitDone.selectedLevel?.level === 'silver') {
        return 'bg-gray-400';
      } else {
        return 'bg-yellow-500';
      }
    }

    return null;
  }, [habit.habitDone]);

  return (
    <div className='card w-full bg-base-100 shadow-xl mb-3'>
      <div>
        <div className='flex justify-between p-4 pb-2'>
          <div>
            <h2 className='card-title'>
              {habit.name}
              <div className='badge badge-primary'>{habit.category}</div>
            </h2>
            {habit.habitDone && (
              <span className='mt-1'>
                {`${habit.habitDone?.variantName} - ${habit.habitDone?.selectedLevel?.name}`}
                <div className={`ml-2 badge text-black ${badgeColor}`}>
                  {habit.habitDone?.selectedLevel?.level}
                </div>
              </span>
            )}
          </div>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-xs m-1'
            >
              <BsThreeDotsVertical />
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to={`/edit-habit/${habit.id}`}>Edit</Link>
              </li>
              <li>
                <button onClick={() => handleOpenDeleteModal(habit.id!)}>
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='relative card-actions p-4 overflow-hidden'>
          <button
            type='button'
            className={`btn btn-sm btn-success text-white ${
              habit.status && 'btn-disabled'
            }`}
            onClick={() => handleOpenDoModal(habit)}
          >
            Do it
          </button>
          <button
            type='button'
            className={`btn btn-sm btn-error ${
              habit.status ? 'btn-disabled' : 'btn-outline'
            }`}
            onClick={() => handleOpenSkipModal(habit.id!)}
          >
            Skip
          </button>
          {habit.status && <Stamp status={habit.status} />}
        </div>
      </div>
    </div>
  );
};
