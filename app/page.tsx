import { CharactersList, SearchBar, SideBar } from '@/components';

import { genders, species, statuses } from '../utils/constants';

export default function Page() {
  return (
    <main className="m-7">
      <SearchBar />
      <div className="flex justify-center flex-wrap  sm:flex-nowrap   gap-5 pt-[50px] mx-auto my-0 max-w-[1500px]">
        <SideBar categories={[...genders, ...statuses, ...species]} />
        <CharactersList />
      </div>
    </main>
  );
}
