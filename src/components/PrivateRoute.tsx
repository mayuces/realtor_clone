import { useAuthStatus } from '../hooks/useAuthStatus';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  
  if (checkingStatus) {
    <h3>Loading...</h3>
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}
