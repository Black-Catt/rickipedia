'use client';

import Link from 'next/link';
import { FC, PropsWithChildren, useState } from 'react';
import { links } from '../utils/constants';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { clearUser } from '@/redux/features/authSlice';
import { Drawer } from '@mui/material';
import BurgerMenu from './BurgerMenu';
import ActionButtons from './ActionButtons';

interface HeaderProps {}

const Header: FC<PropsWithChildren<HeaderProps>> = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="p-4 shadow-lg bg-white text-gray-700">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <h1 className="text-xl text-gray-900 capitalize">Rickipedia </h1>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {links.map((link) => (
            <li key={link.id} className="flex">
              <Link
                rel="noopener noreferrer"
                href={link.url}
                className="flex items-center text-base capitalize px-4   text-gray-900 "
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <ActionButtons user={user} />
        </div>
        <button
          onClick={() => setIsActive(!isActive)}
          className="p-4 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <BurgerMenu
          user={user}
          links={links}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
    </header>
  );
};

export default Header;
