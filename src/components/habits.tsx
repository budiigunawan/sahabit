import { HabitCard } from './habit-card';

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

type HabitsProps = {
  data: Habit[];
};

export const Habits = ({ data }: HabitsProps) => {
  return (
    <div className='max-w-2xl mx-auto py-3 px-5'>
      <div>
        {data.length &&
          data.map((habit, idx) => <HabitCard key={idx} habit={habit} />)}
      </div>
    </div>
  );
};
