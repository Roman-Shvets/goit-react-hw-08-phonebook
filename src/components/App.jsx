import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { LoginPage } from 'page/Login/LoginPage';
// import { RegisterPage } from 'page/Register/RegisterPage';
// import { ContactsPage } from 'page/ContactsPage/ContactsPage';
// import { HomePage } from 'page/Home/HomePage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/user/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/user/operations';

const LoginPage = lazy(() => import('page/Login/LoginPage'));
const RegisterPage = lazy(() => import('page/Register/RegisterPage'));
const ContactsPage = lazy(() => import('page/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('page/Home/HomePage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}
