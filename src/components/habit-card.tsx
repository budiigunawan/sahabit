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

type HabitCardProps = {
  habit: Habit;
};

export const HabitCard = ({ habit }: HabitCardProps) => {
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
              <p className='mt-1'>
                {`${habit.habitDone?.variantName} - ${habit.habitDone?.selectedLevel?.name}`}
                <div className='ml-1 badge bg-yellow-800 text-black'>
                  {habit.habitDone?.selectedLevel?.level}
                </div>
              </p>
            )}
          </div>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-xs m-1'>
              Click
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
