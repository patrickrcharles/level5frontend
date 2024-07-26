import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Title } from '@mui/icons-material';

// const router = createBrowserRouter([
//   { path: "/", element: <Title /> },
//   {}
// ]);

function App() {
  return (
    <>
        <Outlet />
    </>
  );
}

export default App;