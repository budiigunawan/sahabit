import goldMedal from '../assets/gold.png';

export const Header = () => {
  return (
    <div className='max-w-2xl mx-auto py-3 px-5 '>
      <div className='flex justify-between'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-xl font-semibold'>Hello Champ!</h1>
          <p className='mt-1'>
            I am here to cheer you on every step of the way.
          </p>
        </div>
        <div>
          <img src={goldMedal} alt='gold medal' className='h-20' />
        </div>
      </div>
      <progress
        className='mt-8 progress progress-success w-full'
        value='80'
        max='100'
      ></progress>
    </div>
  );
};
