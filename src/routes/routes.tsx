import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/exceptions/NotFoundPage';
import ProtectedRoute from './ProtectedRoutes';
import { routesConfig } from './routesConfig';
import UnAuthenticated from '../components/shared/layouts/UnAuthenticatedLayout';

const Paths = () => {
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((route, index) =>
          route?.public ? (
            <Route
              key={index}
              path={route.path}
              element={
                <UnAuthenticated>
                  <route.component />
                </UnAuthenticated>
              }
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <route.component />
                </ProtectedRoute>
              }
            />
          ),
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
