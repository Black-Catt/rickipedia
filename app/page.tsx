import { CharactersList, SearchBar } from '@/components';

export default async function Page() {
  return (
    <main>
      <SearchBar />
      <CharactersList />
    </main>
  );
}
