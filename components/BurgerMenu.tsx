'use client';

import { UserInfo } from '@/redux/features/authSlice';
import { Drawer } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { ILink } from '../utils/constants';
import ActionButtons from './ActionButtons';

interface BurgerMenuProps {
  isActive: any;
  setIsActive: any;
  links: ILink[];
  user: UserInfo | null;
}

const BurgerMenu: FC<BurgerMenuProps> = ({
  isActive,
  setIsActive,
  links,
  user,
}) => {
  return (
    <Drawer anchor="right" open={isActive} onClose={() => setIsActive(false)}>
      <div className="flex-col flex justify-center h-screen  items-center">
        <ul className="mb-4  gap-8 px-12">
          {links.map((link) => (
            <li key={link.id} className="flex justify-center items-center">
              <Link
                rel="noopener noreferrer"
                href={link.url}
                className=" text-2xl capitalize px-4  text-gray-900 "
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="items-center flex-shrink-0 gap-1 flex">
          <ActionButtons user={user} />
        </div>
      </div>
    </Drawer>
  );
};

export default BurgerMenu;
