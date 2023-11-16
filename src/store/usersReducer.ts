import { User } from "../api/authenticate";
import {
    DELETE_USER_ASYNC,
    FETCH_USERS_ASYNC,
    SAVE_USER_ASYNC,
    UPDATE_USER_ASYNC,
    USER_RESET
} from "./actions";

type State = {
    users: Array<User>,
    loading: boolean,
};

interface ActionType {
    type: string;
    payload: {
        data: any
    }; // Adjust the type according to your actual payload structure
}


const initialState: State = {
    loading: false,
    users: []
};


const usersReducer = (
    state = initialState,
    action: ActionType
) => {

    switch (action.type) {

        case FETCH_USERS_ASYNC.PENDING:
        case UPDATE_USER_ASYNC.PENDING:
        case DELETE_USER_ASYNC.PENDING:
        case SAVE_USER_ASYNC.PENDING:
            return {
                ...state,
                loading: true
            }

        case UPDATE_USER_ASYNC.REJECTED:
        case FETCH_USERS_ASYNC.REJECTED:
        case DELETE_USER_ASYNC.REJECTED:
        case SAVE_USER_ASYNC.REJECTED:
            return {
                ...state,
                loading: false
            }

        case FETCH_USERS_ASYNC.FULFILLED:
            return {
                ...state,
                loading: false,
                users: action.payload.data
            }

        case DELETE_USER_ASYNC.FULFILLED:
            return {
                ...state,
                loading: false,
                users: state.users.filter(item => item.id === action.payload.data)
            }

        case UPDATE_USER_ASYNC.FULFILLED:
            return {
                ...state,
                loading: false,
                users: state.users.map((user: User) => {
                    if (user.id === action.payload.data.id) {
                        return {
                            ...user, ...action.payload.data
                        }
                    } else return user
                })

            }

        case SAVE_USER_ASYNC.FULFILLED:
            return {
                ...state,
                loading: false,
                users: [action.payload.data, ...state.users]
            }


        case USER_RESET:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export default usersReducer