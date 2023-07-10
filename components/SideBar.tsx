import { FC } from 'react';
import RadioFilter from './RadioFilter';
import { FilterOption } from '../utils/constants';
import ClearFlittersButton from './ClearFiltersButton';
import SelectFilter from './SelectFilter';

interface SideBarProps {
  categories?: FilterOption[];
  items?: boolean;
  itemName?: string | null | undefined;
  itemNameId?: string;
}

const SideBar: FC<SideBarProps> = ({
  categories,
  items = false,
  itemName,
  itemNameId,
}) => {
  return (
    <aside className="w-full h-full p-6 sm:w-60 rounded-xl bg-white shadow-xl text-gray-900 mb-6">
      <h2 className="text-xl pb-4">{itemName}</h2>
      <nav className="space-y-8 text-sm">
        {items && <SelectFilter nameId={itemNameId!} />}
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
