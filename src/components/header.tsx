import { Medal } from './medal';

type HeaderProps = {
  point: number;
  habitsCounter: number;
};

export const Header = ({ point, habitsCounter }: HeaderProps) => {
  return (
    <div className='py-3 px-5 '>
      <div className='flex justify-between'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-xl font-semibold'>Hello Champ!</h1>
          <p className='mt-1 text-lg'>
            {habitsCounter
              ? 'Do the habit and earn a shiny medal.'
              : 'Sahabit is here to cheer you on every step of the way.'}
          </p>
        </div>
        <div>
          <Medal point={point} />
        </div>
      </div>
      <progress
        className='mt-8 progress progress-success w-full h-7'
        value={point}
        max={9}
      ></progress>
    </div>
  );
};
