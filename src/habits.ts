import localforage from 'localforage';
import { matchSorter } from 'match-sorter';
import sortBy from 'sort-by';
import { Habit } from './types/habit-type';

export async function getHabits(query?: string) {
  await fakeNetwork(`getHabits:${query}`);
  let habits = (await localforage.getItem('habits')) as Habit[];
  if (!habits) habits = [];
  if (query) {
    habits = matchSorter(habits, query, { keys: ['first', 'last'] });
  }
  return habits.sort(sortBy('last', 'createdAt'));
}

export async function createHabit(payload: Habit) {
  await fakeNetwork();
  const { name, category, variants, status, habitDone } = payload;
  const id: string = Math.random().toString(36).substring(2, 9);
  const habit: Habit = {
    id,
    createdAt: Date.now(),
    name,
    category,
    variants,
    status,
    habitDone,
  };
  const habits = await getHabits();
  habits.unshift(habit);
  await set(habits);
  return habit;
}

export async function getHabit(id: string) {
  await fakeNetwork(`habit:${id}`);
  const habits = (await localforage.getItem('habits')) as Habit[];
  const habit = habits?.find((habit) => habit.id === id);
  return habit ?? null;
}

export async function editHabit(id: string, payload: Habit) {
  await fakeNetwork();
  const habits = (await localforage.getItem('habits')) as Habit[];
  const habit = habits?.find((habit) => habit.id === id);

  if (!habit) throw new Error(`No habit found for ${id}`);

  Object.assign(habit, payload);
  await set(habits);
  return habit;
}

export async function deleteHabit(id: string) {
  const habits = (await localforage.getItem('habits')) as Habit[];
  const index = habits.findIndex((habit) => habit.id === id);
  if (index > -1) {
    habits.splice(index, 1);
    await set(habits);
    return true;
  }
  return false;
}

export async function skipHabit(id: string) {
  await fakeNetwork();
  const habits = (await localforage.getItem('habits')) as Habit[];
  const habit = habits?.find((habit) => habit.id === id);

  if (!habit) throw new Error(`No habit found for ${id}`);

  Object.assign(habit, { ...habit, status: 'skip' });
  await set(habits);
  return habit;
}

function set(habits: Habit[]) {
  return localforage.setItem('habits', habits);
}

// fake a cache so we don't slow down stuff we've already seen
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Cache = {
  [key: string]: boolean;
};

let fakeCache = {} as Cache;

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key!]) {
    return;
  }

  fakeCache[key!] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
