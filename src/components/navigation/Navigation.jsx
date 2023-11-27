import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
export default function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              style={props => {
                return { color: props.isActive ? 'red' : 'black' };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={props => {
                return { color: props.isActive ? 'red' : 'black' };
              }}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}