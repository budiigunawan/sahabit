import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Root } from './routes/root.tsx';
import { ErrorPage } from './components/error-page.tsx';
import { AddHabit } from './routes/add-habit.tsx';
import { EditHabit } from './routes/edit-habit.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: Root.loader,
  },
  {
    path: '/add-habit',
    element: <AddHabit />,
    errorElement: <ErrorPage />,
    action: AddHabit.action,
  },
  {
    path: '/edit-habit/:habitId',
    element: <EditHabit />,
    errorElement: <ErrorPage />,
    loader: EditHabit.loader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
