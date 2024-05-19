import { GoTrophy } from 'react-icons/go';
import { FaXmark } from 'react-icons/fa6';

type StampProps = {
  status: string;
};

export const Stamp = ({ status }: StampProps) => {
  return (
    <button className='absolute -bottom-8 -right-3'>
      <div
        className={`group flex h-24 w-24 -rotate-[20deg] items-center justify-center rounded-full border-4 transition hover:rotate-[6] hover:cursor-pointer ${
          status === 'done' ? 'border-green-300' : 'border-red-300'
        }`}
      >
        <div
          className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-2 text-center font-bold text-white ${
            status === 'done' ? 'bg-green-400' : 'bg-red-400'
          }`}
        >
          {status === 'done' ? <GoTrophy size={32} /> : <FaXmark size={32} />}
        </div>
        <div
          className={`absolute h-16 w-16 rounded-full border-2 border-dotted ${
            status === 'done' ? 'border-green-300' : 'border-red-300'
          }`}
        ></div>
        <div
          className={`absolute h-20 w-20 rounded-full border-2 ${
            status === 'done' ? 'border-green-400' : 'border-red-400'
          }`}
        ></div>
      </div>
    </button>
  );
};
