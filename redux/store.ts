import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { charactersSlice } from './features/charactersSlice';
import { authSlice } from './features/authSlice';

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [charactersSlice.name]: charactersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
