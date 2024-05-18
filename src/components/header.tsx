import goldMedal from '../assets/gold.png';

type HeaderProps = {
  point: number;
  tasksCounter: number;
};

export const Header = ({ point, tasksCounter }: HeaderProps) => {
  return (
    <div className='max-w-2xl mx-auto py-3 px-5 '>
      <div className='flex justify-between'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-xl font-semibold'>Hello Champ!</h1>
          <p className='mt-1 text-lg'>
            {tasksCounter
              ? 'Complete the task and earn a shiny medal.'
              : 'Sahabit is here to cheer you on every step of the way.'}
          </p>
        </div>
        <div>
          <img src={goldMedal} alt='gold medal' className='h-20' />
        </div>
      </div>
      <progress
        className='mt-8 progress progress-success w-full h-7'
        value={point}
        max='12'
      ></progress>
    </div>
  );
};