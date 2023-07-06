import { FC } from 'react';
import Filters from './Filters';
import { genders, statuses } from '../utils/constants';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <aside className="w-full h-[420px] p-6 sm:w-60 rounded-xl bg-primary shadow-xl text-gray-100">
      <nav className="space-y-8 text-sm">
        <div className="space-y-2">
          <Filters title="gender" category={genders} />
        </div>
        <div className="space-y-2">
          <Filters title="status" category={statuses} />
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
