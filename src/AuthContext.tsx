import {
    createContext,
    useContext,
    useReducer,
    ReactNode,
} from 'react';
import { User } from './api/authenticate';

type State = {
    user: undefined | User,
    permissions: undefined | string[],
    loading: boolean,
};
const initialState = {
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

type AuthContextType = State & {
    dispatch: React.Dispatch<Action>,
};

const AuthContext = createContext<AuthContextType>({
    ...initialState,
    dispatch: () => { },
});

type Props = {
    children: ReactNode;
};
export function AuthProvider({ children }: Props) {
    const [{ user, permissions, loading }, dispatch] =
        useReducer(reducer, initialState);
    return (
        <AuthContext.Provider
            value={{
                user,
                permissions,
                loading,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);