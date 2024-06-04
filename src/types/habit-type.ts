export type Habit = {
  id: string;
  createdAt?: number;
  name: string;
  category: string;
  variants: HabitVariant[];
  status?: string;
  habitDone?: HabitDone;
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
