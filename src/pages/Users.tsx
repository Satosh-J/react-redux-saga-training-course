import '../App.css'
import { NavLink, Outlet } from 'react-router-dom'

export function UsersPage() {
  return (
    <div>
      <nav>
        <NavLink to="list" >List</NavLink>
        <NavLink to="role" >Role</NavLink>
        <NavLink to="license"  >License</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
