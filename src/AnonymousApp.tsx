import { RouterProvider } from 'react-router-dom';
import { router } from './App-router';

function AnonymousApp() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default AnonymousApp;
