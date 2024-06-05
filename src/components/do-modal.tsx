import { useRevalidator } from 'react-router-dom';
import { doHabit } from '../habits';
import { Habit, HabitDone } from '../types/habit-type';

type DeleteModalProps = {
  selectedHabit: Habit;
};

export const DoModal = ({ selectedHabit }: DeleteModalProps) => {
  const revalidator = useRevalidator();

  const handleDoHabit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const selectedLevel = selectedHabit?.variants[0]?.levels.find(
      (optiton) => optiton.level === values.level
    );

    const payload: HabitDone = {
      variantName: selectedHabit?.variants[0]?.name,
      selectedLevel,
    };
    await doHabit(selectedHabit.id!, payload);
    handleCloseModal();
    revalidator.revalidate();
  };

  const handleCloseModal = () => {
    (document?.getElementById('do-modal') as HTMLDialogElement).close();
  };

  return (
    <dialog id='do-modal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Do Habit</h3>
        <div>
          <form onSubmit={handleDoHabit} method='post'>
            <div className='form-control w-full mt-2'>
              <div className='label'>
                <span className='label-text'>Name:</span>
              </div>
              <input
                defaultValue={selectedHabit?.name}
                name='name'
                type='text'
                placeholder='Exercise'
                className='input input-bordered w-full'
                disabled
              />
            </div>
            <div className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Variant name:</span>
              </div>
              <input
                defaultValue={selectedHabit?.variants[0]?.name}
                name='variantName'
                type='text'
                placeholder='Jogging'
                className='input input-bordered w-full'
                disabled
              />
            </div>
            <div className='form-control w-full mt-2'>
              <div className='label'>
                <span className='label-text'>Level:</span>
              </div>
              <select name='level' className='select select-bordered'>
                {selectedHabit?.variants[0].levels.map((option, index) => (
                  <option
                    key={`option-level-${index}`}
                    value={option.level}
                  >{`${option.level} : ${option.name}`}</option>
                ))}
              </select>
            </div>
            <div className='mt-8 flex gap-2 justify-end'>
              <button type='submit' className='btn btn-success text-white'>
                Do it
              </button>
              <button type='button' onClick={handleCloseModal} className='btn'>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
};
