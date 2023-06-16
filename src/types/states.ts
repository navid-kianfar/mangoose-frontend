export type LoginState = {
    loggedIn: boolean;
    user: any;
    error: any;
};

export type RootState = {
    login: LoginState
};