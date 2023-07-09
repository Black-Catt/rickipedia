import { FC } from 'react';
import RadioFilter from './RadioFilter';
import { FilterOption } from '../utils/constants';
import ClearFlittersButton from './ClearFiltersButton';
import SelectFilter from './SelectFilter';

interface SideBarProps {
  categories?: FilterOption[];
  episodes?: boolean;
  episodeName?: string | null | undefined;
}

const SideBar: FC<SideBarProps> = ({
  categories,
  episodes = false,
  episodeName,
}) => {
  return (
    <aside className="w-full h-full p-6 sm:w-60 rounded-xl bg-white shadow-xl text-gray-900 mb-6">
      <h2 className="text-xl pb-4">{episodeName}</h2>
      <nav className="space-y-8 text-sm">
        {episodes && <SelectFilter />}
        {categories?.map((el, i) => (
          <div key={i} className="space-y-2">
            <RadioFilter title={el.title} category={el.values} />
          </div>
        ))}
      </nav>
      <ClearFlittersButton />
    </aside>
  );
};

export default SideBar;
