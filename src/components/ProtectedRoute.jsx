import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export const ProtectedRoute = ({ redirectPath }) => {
  // const { isAuth } = useAuth()
  if (!Boolean(localStorage.getItem('user'))) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
