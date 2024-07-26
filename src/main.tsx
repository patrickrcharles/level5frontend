import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/CustomRouterProvider';
import React from 'react';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <RouterProvider router={router} />
// );

// const root = ReactDOM.createRoot(document.getElementById('root')!).render(
//     <RouterProvider router={router} />
// );

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <BrowserRouter>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  // </BrowserRouter>
);
// 
