export type Habit = {
  name: string;
  category: string;
  variants: HabitVariant[];
  status: string | undefined;
  habitDone: HabitDone | null;
};

export type HabitVariant = {
  name: string;
  levels: VariantLevel[];
};

export type VariantLevel = {
  level: string;
  name: string;
};

export type HabitDone = {
  variantName: string;
  selectedLevel: VariantLevel | null;
};
