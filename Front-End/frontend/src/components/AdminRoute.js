import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function AdminRoute() {
  const { user } = useSelector((s) => s.auth)
  return user?.role === 'Admin'
    ? <Outlet />
    : <Navigate to="/mon-planning" />
}