import emptyBox from '../assets/empty.svg';

export const EmptyHabit = () => {
  return (
    <div className='text-center'>
      <img src={emptyBox} alt='an empty box' className='mx-auto' />
      <h2 className='text-lg font-semibold mt-8'>No habits found</h2>
      <p className='mt-2'>Lets add a new habit by click button below!</p>
    </div>
  );
};
