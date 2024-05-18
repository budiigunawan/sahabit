export const Habits = () => {
  return (
    <div className='max-w-2xl mx-auto py-3 px-5'>
      <div>
        <div className='card w-full bg-base-100 shadow-xl'>
          <div className='card-body'>
            <div className='flex justify-between'>
              <div>
                <h2 className='card-title'>
                  Exercise
                  <div className='badge badge-primary'>Body</div>
                </h2>
                <p className='mt-1'>
                  Push up - 5 times
                  <div className='ml-1 badge bg-yellow-800'>Bronze</div>
                </p>
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
          <div className='card-body'>
            <div className='flex justify-between'>
              <div>
                <h2 className='card-title'>
                  Study
                  <div className='badge badge-primary'>Mind</div>
                </h2>
                <p className='mt-1'>
                  Read book - 20 minutes
                  <div className='ml-1 badge bg-gray-500'>Silver</div>
                </p>
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
          <div className='card-body'>
            <div className='flex justify-between'>
              <div>
                <h2 className='card-title'>
                  Pray
                  <div className='badge badge-primary'>Soul</div>
                </h2>
                <p className='mt-1'>
                  Sunnah - Tahajud
                  <div className='ml-1 badge bg-yellow-300'>Gold</div>
                </p>
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
      </div>
    </div>
  );
};
