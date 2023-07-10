import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import charactersSlice from './features/charactersSlice';
import authSlice from './features/authSlice';

export const store = configureStore({
  reducer: { charactersSlice, authSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
