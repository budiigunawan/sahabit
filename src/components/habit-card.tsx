import { useMemo } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Habit } from '../types/habit-type';

type HabitCardProps = {
  habit: Habit;
};

export const HabitCard = ({ habit }: HabitCardProps) => {
  const badgeColor = useMemo(() => {
    if (habit.habitDone) {
      if (habit.habitDone.selectedLevel?.level === 'gold') {
        return 'bg-yellow-400';
      } else if (habit.habitDone.selectedLevel?.level === 'silver') {
        return 'bg-gray-400';
      } else {
        return 'bg-yellow-800';
      }
    }

    return null;
  }, [habit.habitDone]);

  return (
    <div className='card w-full bg-base-100 shadow-xl mb-3'>
      <div className='card-body'>
        <div className='flex justify-between'>
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
                <a>Edit</a>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='card-actions justify-end mt-2'>
          <button className='btn btn-sm btn-success'>Do it</button>
          <button className='btn btn-sm btn-outline btn-error'>Skip</button>
        </div>
      </div>
    </div>
  );
};
