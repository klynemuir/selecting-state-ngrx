import { Auth } from "../models/auth.model";
import { ActionInterface, AuthenticationActions } from "../actions/index.action"

const initialState: Auth = {
  isAuthenticated: false
}

export const reducer = (state: Auth = initialState, action: ActionInterface) => {
  switch (action.type) {
    case AuthenticationActions.Login:
      return state.isAuthenticated = true;
    case AuthenticationActions.Logout:
      return state.isAuthenticated = false
    default: 
      return state
  }
}