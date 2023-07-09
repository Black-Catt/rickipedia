import { CharactersList, SearchBar, SideBar } from '@/components';
import { genders, species, statuses } from '../utils/constants';

export default async function Page() {
  return (
    <main>
      <SearchBar />
      <div className="flex justify-center gap-9 pt-[50px] mx-auto my-0 max-w-[1500px]">
        <SideBar categories={[...genders, ...statuses, ...species]} />
        <CharactersList />
      </div>
    </main>
  );
}
