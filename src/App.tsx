import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { ContactFormError } from './pages/ContactFormError';
import { ContactFormSuccessfullySent } from './pages/ContactFormSuccessfullySent';
import { ContactMe } from './pages/ContactMe';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/LandingPage';
import { MentionsLegales } from './pages/MentionsLegales';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <ContactMe />,
  },
  {
    path: '/contact/success',
    element: <ContactFormSuccessfullySent />,
  },
  {
    path: '/contact/error',
    element: <ContactFormError />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
  },
]);

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
