import { createBrowserRouter } from 'react-router-dom';
import { ContactFormError } from './pages/ContactFormError';
import { ContactFormSuccessfullySent } from './pages/ContactFormSuccessfullySent';
import { ContactMe } from './pages/ContactMe';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/LandingPage';
import { MentionsLegales } from './pages/MentionsLegales';
import { Tarifs } from './pages/Tarifs';

export const router = createBrowserRouter([
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
    path: '/tarifs',
    element: <Tarifs />,
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
