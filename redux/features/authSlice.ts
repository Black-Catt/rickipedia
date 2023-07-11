import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export interface AuthState {
  user: UserInfo | null;
}

export interface UserInfo {
  email: string;
  password: string;
  name: string;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        state.user = null;
        return;
      }
      localStorage.setItem('user', JSON.stringify({ ...action.payload }));
      state.user = {
        ...action.payload,
      };
    },
    clearUser: (state) => {
      state.user = null;
    },
    signIn: (state, { payload }) => {
      const userData = JSON.parse(localStorage.getItem('user') as string);
      const { password, email } = payload;
      if (userData.email === email && userData.password === password) {
        state.user = {
          ...payload,
        };
      } else {
        toast.error('Wrong data');
      }
    },
  },
});

export const { setUser, clearUser, signIn } = authSlice.actions;
export default authSlice.reducer;
