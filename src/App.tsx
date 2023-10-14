import './App.css'
import NavBar from './components/Navbar'
import { Outlet } from 'react-router-dom';

import { useReducer } from 'react';
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';
import { Content } from './components/Content';

type State = {
  user?: User,
  permissions?: string[],
  loading: boolean,
};
const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
};

type Action =
  | {
    type: "authenticate",
  }
  | {
    type: "authenticated",
    user?: User,
  }
  | {
    type: "authorize",
  }
  | {
    type: "authorized",
    permissions: string[],
  };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "authenticate":
      return { ...state, loading: true };
    case "authenticated":
      return { ...state, loading: false, user: action.user };
    case "authorize":
      return { ...state, loading: true };
    case "authorized":
      return {
        ...state,
        loading: false,
        permissions: action.permissions,
      };
    default:
      return state;
  }
}

function App() {

  const [{ user, permissions, loading }, dispatch] =
    useReducer(reducer, initialState);


  async function handleSignInClick() {
    dispatch({ type: "authenticate" });
    const authenticatedUser = await authenticate();
    dispatch({
      type: "authenticated",
      user: authenticatedUser,
    });
    if (authenticatedUser !== undefined) {
      dispatch({ type: "authorize" });
      const authorizedPermissions = await authorize(
        authenticatedUser.id
      );
      dispatch({
        type: "authorized",
        permissions: authorizedPermissions,
      });
    }
  }

  return (
    <>
      <NavBar user={user} onSignInClick={handleSignInClick} loading={false} />
      <Outlet context={[user, permissions, loading]} />
      <Content permissions={permissions} />
    </>
  )
}

export default App
