import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type User = {
  user_id: number | null;
  nickname: string | null;
  bio: string | null;
  profile_photo: string | null;
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
    nickname: null,
    bio: null,
    profile_photo: null,
    user_id: null,
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
  return dispatch;
}
