'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppSelector } from '../redux/store';
import { redirect } from 'next/navigation';
import { ComponentType } from 'react';

export default function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>
): ComponentType<T> {
  return function ProtectedRoute({ ...props }) {
    const { user } = useAppSelector((state) => state.authSlice);

    useEffect(() => {
      if (!user) {
        redirect('/sign-up');
      }
    }, [user]);

    return <Component {...props} />;
  };
}
