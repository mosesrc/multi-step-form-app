import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './shared/pages/Home/Home';
import MainRouterContainer from './shared/containers/MainRoutingContainer/MainRoutingContainer'
import RouteContainer from './shared/containers/RouteContainer/RouteContainer';
import InfoPage from './shared/pages/InfoPage/InfoPage';
import SelectPlanPage from './shared/pages/SelectPlanPage/SelectPlanPage';
import AddOnPage from './shared/pages/AddOnPage/AddOnPage';
import SummaryPage from './shared/pages/SummaryPage/SummaryPage';
import ConfirmationPage from "./shared/pages/ConfirmationPage/ConfirmationPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/', element: <MainRouterContainer />,
        children: [
          {
            path: '/', element: <RouteContainer />,
            children: [
              { path: '/info', element: <InfoPage /> },
              { path: '/select-plan', element: <SelectPlanPage /> },
              { path: '/add-ons', element: <AddOnPage /> },
              { path: '/summary', element: <SummaryPage /> },
            ]
          }
        ]
      },
      { path: '/confirm', element: <ConfirmationPage /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
