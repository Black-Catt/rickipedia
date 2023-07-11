'use client';

import { useEffect } from 'react';
import { useAppSelector } from '../redux/store';
import { redirect } from 'next/navigation';
import { ComponentType } from 'react';

export default function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>
): ComponentType<T> {
  return function ProtectedRoute({ ...props }) {
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
      if (!user) {
        redirect('/sign-in');
      }
    }, [user]);

    return <Component {...props} />;
  };
}
