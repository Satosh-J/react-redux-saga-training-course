import '../App.css'
import { NavLink, Outlet } from 'react-router-dom'

export function UsersPage() {
  return (
    <div >
      <nav style={{
        display: 'flex',
        gap: 5
      }}>
        <NavLink to="" >List</NavLink>
        <NavLink to="role" >Role</NavLink>
        <NavLink to="license" >License</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
