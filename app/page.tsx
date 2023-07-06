import { CharactersList, SearchBar, SideBar, Header } from '@/components';

export default async function Page() {
  return (
    <main>
      <Header />
      <SearchBar />
      <div className="flex justify-center gap-9 pt-[50px] mx-auto my-0 max-w-[1500px]">
        <SideBar />
        <CharactersList />
      </div>
    </main>
  );
}
