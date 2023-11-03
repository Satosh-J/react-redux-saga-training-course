export type UserData = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    zipcode: string,
    address: string,
    state: string
};

export type NewUserData = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    zipcode: string,
    address: string,
    state: string
};

export type SavedUserData = {
    id: number;
};