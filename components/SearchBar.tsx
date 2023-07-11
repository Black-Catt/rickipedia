import { FC } from 'react';
import Search from './Search';
import Sort from './Sort';

const SearchBar: FC = () => {
  return (
    <div className="w-full flex-wrap  md:flex-nowrap md:w-[500px] mx-auto my-0 pt-8 gap-8 flex">
      <Search />
      <Sort />
    </div>
  );
};

export default SearchBar;
