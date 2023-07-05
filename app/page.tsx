import { CharactersList, SearchBar, Filters, SideBar } from '@/components';

export default async function Page() {
  return (
    <main>
      <SearchBar />
      <CharactersList />
    </main>
  );
}
