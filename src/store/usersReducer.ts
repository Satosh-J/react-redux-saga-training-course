import { Reducer } from "redux";
import { User } from "../api/authenticate";
import { FETCH_USERS_FULFILLED, FETCH_USERS_PENDING, FETCH_USERS_REJECTED, USER_RESET } from "./actions";

type State = {
    users: Array<User>,
    loading: boolean,
};

interface MyAction {
    type: string;
    payload: any; // Adjust the type according to your actual payload structure
}


const initialState: State = {
    loading: false,
    users: []
};


const usersReducer: any = (
    state = initialState,
    action: MyAction
) => {
    switch (action.type) {
        case FETCH_USERS_PENDING:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_REJECTED:
            return {
                ...state,
                loading: false
            }
        case FETCH_USERS_FULFILLED:
            return {
                ...state,
                loading: false,
                users: action.payload.data
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