'use client'

import { FC } from 'react';
import { useAppDispatch } from '../redux/store';
import { clearUser, UserInfo } from '@/redux/features/authSlice';
import Link from 'next/link';

interface ActionButtonsProps {
  user: UserInfo | null;
}

const ActionButtons: FC<ActionButtonsProps> = ({ user }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {user ? (
        <button
          onClick={() => dispatch(clearUser())}
          className="self-center text-base text-gray-900 px-8 py-3 rounded"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/sign-in"
          className="self-center text-base text-gray-900 px-8 py-3 rounded"
        >
          Sign in
        </Link>
      )}
      <Link
        href="/sign-up"
        className="self-center text-base px-4 py-3 text-white shadow-lg font-semibold rounded bg-violet-400 duration-100 hover:bg-violet-500 "
      >
        Sign up
      </Link>
    </>
  );
};

export default ActionButtons;
