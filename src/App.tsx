import { RouterProvider } from 'react-router-dom';
import { router } from './App-router';
import { UserContext, useUserContextInfo } from './contexts/userContext';

function App() {
  const [userInfo] = useUserContextInfo();

  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
