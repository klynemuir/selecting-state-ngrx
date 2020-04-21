import { Action } from "@ngrx/store";

export enum ActionTypes {
  Login = "[Landing Page] Login",
  Logout = "[Landing Page] Logout"
}

export interface ActionInterface {
  Login: string;
  Logout: string;
}

export class LoginAction  implements Action {
  readonly type: ActionTypes.Login
}

export class LogoutAction implements Action {
  readonly type: ActionTypes.Logout
}

export type AuthenticationActions = LoginAction | LogoutAction;