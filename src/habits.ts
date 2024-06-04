import localforage from 'localforage';
import { matchSorter } from 'match-sorter';
import sortBy from 'sort-by';
import { Habit } from './types/habit-type';

export async function getHabits(query?: string) {
  await fakeNetwork(`getHabits:${query}`);
  let habits: Habit[] | null = await localforage.getItem('habits');
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

// export async function getContact(id) {
//   await fakeNetwork(`contact:${id}`);
//   let habits = await localforage.getItem('habits');
//   let contact = habits.find((contact) => contact.id === id);
//   return contact ?? null;
// }

// export async function updateContact(id, updates) {
//   await fakeNetwork();
//   let habits = await localforage.getItem('habits');
//   let contact = habits.find((contact) => contact.id === id);
//   if (!contact) throw new Error('No contact found for', id);
//   Object.assign(contact, updates);
//   await set(habits);
//   return contact;
// }

// export async function deleteContact(id) {
//   let habits = await localforage.getItem('habits');
//   let index = habits.findIndex((contact) => contact.id === id);
//   if (index > -1) {
//     habits.splice(index, 1);
//     await set(habits);
//     return true;
//   }
//   return false;
// }

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
