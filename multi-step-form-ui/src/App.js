import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeContext } from './shared/context/context';
import './App.css';
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
  const [hideGoBackBtn, setHideGoBackBtn] = useState(true);
  const [showConfirmBtn, setShowConfirmBtn] = useState(false)

  const hideBtn = (val) => {
    setHideGoBackBtn(val);
  }

  const showConfirm = (val) => {
    setShowConfirmBtn(val);
  }

  const themeState = { hideGoBackBtn, hideBtn, showConfirmBtn, showConfirm };

  return (
    <ThemeContext.Provider value={themeState}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App;
