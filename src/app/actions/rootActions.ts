import { Action } from "@ngrx/store";
import { User } from "../user.model";

const LOGIN = "[USER] login";
const LOGOUT = "[USER] logout";

class Login implements Action {
  readonly type = LOGIN
  constructor(public payload: User[]) {}
}

class Logout implements Action {
  readonly type = LOGOUT
}

export type RootActions = Login | Logout