import goldMedal from '../assets/gold-medal.svg';
import silverMedal from '../assets/silver-medal.svg';
import bronzeMedal from '../assets/bronze-medal.svg';

type MedalProps = {
  point: number;
};

export const Medal = ({ point }: MedalProps) => {
  if (point <= 3) {
    return <img src={bronzeMedal} alt='gold medal' className='h-20' />;
  } else if (point <= 6) {
    return <img src={silverMedal} alt='gold medal' className='h-20' />;
  } else {
    return <img src={goldMedal} alt='gold medal' className='h-20' />;
  }
};
