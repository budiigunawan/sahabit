import React from 'react';
import { Header } from '../components/header';
import { Navbar } from '../components/navbar';
import { Habits } from '../components/habits';
import { Habit } from '../types/habit-type';
import { habitSeed } from '../data';

export const Root = () => {
  const point = 3;
  const habits: Habit[] = habitSeed;

  return (
    <>
      <Navbar />
      <Header point={point} habitsCounter={habits.length} />
      <Habits habits={habits} />
    </>
  );
};
