import React from 'react';
import { Navbar } from './navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='max-w-2xl mx-auto'>
      <Navbar />
      {children}
    </div>
  );
};
