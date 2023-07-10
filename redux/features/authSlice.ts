import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    email: string;
    password: string;
    name: string;
  } | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
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
    signIn: (state, action) => {
      const userData = JSON.parse(localStorage.getItem('user') as string);
      const { password, email } = action.payload.values;
      if (userData.email === email && userData.password === password) {
        state.user = {
          ...action.payload,
        };
      }
    },
  },
});

export const { setUser, clearUser, signIn } = authSlice.actions;
export default authSlice.reducer;
