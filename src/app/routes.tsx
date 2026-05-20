import { createBrowserRouter, Outlet } from 'react-router';
import { HomePage } from './pages/HomePage';
import { PBSLandingPage } from './pages/PBSLandingPage';
import { FRPLandingPage } from './pages/FRPLandingPage';
import { MTTRLandingPage } from './pages/MTTRLandingPage';
import { FMECALandingPage } from './pages/FMECALandingPage';
import { PMLandingPage } from './pages/PMLandingPage';
import { SparesLandingPage } from './pages/SparesLandingPage';
import { SafetyLandingPage } from './pages/SafetyLandingPage';
import { FTALandingPage } from './pages/FTALandingPage';
import { RBDLandingPage } from './pages/RBDLandingPage';
import { ReportsLandingPage } from './pages/ReportsLandingPage';
import { Demo } from './pages/Demo';
import { ScrollToHash } from './components/ScrollToHash';

function RootLayout() {
  return (
    <>
      <ScrollToHash />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'modules/pbs',
        element: <PBSLandingPage />,
      },
      {
        path: 'industries',
        element: <Demo />,
      },
      {
        path: 'modules/frp',
        element: <FRPLandingPage />,
      },
      {
        path: 'modules/mttr',
        element: <MTTRLandingPage />,
      },
      {
        path: 'modules/fmeca',
        element: <FMECALandingPage />,
      },
      {
        path: 'modules/pm',
        element: <PMLandingPage />,
      },
      {
        path: 'modules/spares',
        element: <SparesLandingPage />,
      },
      {
        path: 'modules/safety',
        element: <SafetyLandingPage />,
      },
      {
        path: 'modules/fta',
        element: <FTALandingPage />,
      },
      {
        path: 'modules/rbd',
        element: <RBDLandingPage />,
      },
      {
        path: 'modules/reports',
        element: <ReportsLandingPage />,
      },
    ],
  },
]);
