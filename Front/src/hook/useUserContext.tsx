import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type User = {
  nickname: string;
  bio: string;
  profile_photo: string;
  user_id: string;
  isLoggedIn: boolean;
};

const UserStateContext = createContext<User | undefined>(undefined);

type Action =
  | { type: 'LOGIN'; payload: User }
  | { type: 'IMAGE_CHANGE'; payload: string }
  | { type: 'BIO_CHANGE'; payload: string };

type UserDispatch = Dispatch<Action>;

const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

function userReducer(state: User, action: Action): User {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'IMAGE_CHANGE':
      return {
        ...state,
        profile_photo: action.payload,
      };
    case 'BIO_CHANGE':
      return {
        ...state,
        bio: action.payload,
      };
    default:
      throw new Error('Unhandled');
  }
}

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, dispatch] = useReducer(userReducer, {
    nickname: '',
    bio: '',
    profile_photo: '',
    user_id: '',
    isLoggedIn: false,
  });

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={user}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
}

export function useUserState() {
  const user = useContext(UserStateContext);
  if (!user) return;
  return user;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) return;
  return dispatch;
}
