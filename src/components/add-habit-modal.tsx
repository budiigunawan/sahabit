import { MdAdd, MdDeleteForever } from 'react-icons/md';

export const AddHabitModal = () => {
  return (
    <dialog id='add-habit-modal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Add new habit</h3>
        <form>
          <div className='form-control w-full mt-2'>
            <div className='label'>
              <span className='label-text'>Name:</span>
            </div>
            <input
              type='text'
              placeholder='Exercise'
              className='input input-bordered w-full'
            />
          </div>
          <div className='form-control w-full mt-2'>
            <div className='label'>
              <span className='label-text'>Type:</span>
            </div>
            <select className='select select-bordered'>
              <option>Body</option>
              <option>Mind</option>
              <option>Soul</option>
            </select>
          </div>
          <div className='form-control w-full mt-2'>
            <div className='label'>
              <span className='label-text'>Variants:</span>
            </div>
            <div className='card bg-neutral text-neutral-content w-full'>
              <div className='card-body text-center p-4'>
                <div className='form-control w-full'>
                  <div className='label'>
                    <span className='label-text'>Variant name:</span>
                  </div>
                  <input
                    type='text'
                    placeholder='Jogging'
                    className='input input-bordered w-full'
                  />
                </div>
                <div className='form-control w-full'>
                  <div className='label'>
                    <span className='label-text'>Variant levels:</span>
                  </div>
                  <label className='input input-bordered flex items-center gap-2 mb-2'>
                    Gold:
                    <input type='text' className='grow' placeholder='1km' />
                  </label>
                  <label className='input input-bordered flex items-center gap-2 mb-2'>
                    Silver:
                    <input type='text' className='grow' placeholder='2km' />
                  </label>
                  <label className='input input-bordered flex items-center gap-2 mb-2'>
                    Bronze:
                    <input type='text' className='grow' placeholder='5km' />
                  </label>
                </div>
                <div className='card-actions justify-end'>
                  <button className='btn btn-square btn-outline btn-error btn-sm'>
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
            <button type='button' className='btn btn-sm btn-ghost w-24 mt-2'>
              <MdAdd /> Variant
            </button>
          </div>
          <div className='modal-action'>
            <button type='button' className='btn btn-success'>
              Add
            </button>
            <form method='dialog'>
              <button className='btn btn-outline btn-error'>Cancel</button>
            </form>
          </div>
        </form>
      </div>
    </dialog>
  );
};
