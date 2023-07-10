'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppSelector } from '../redux/store';
import { redirect } from 'next/navigation';

export default function withAuth(Component: React.ComponentType) {
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
