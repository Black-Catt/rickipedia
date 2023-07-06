import { CharacterCard, InfoTable, Loader, Stats } from '@/components';
import { getClient } from '@/lib/client';
import { GetSingleCharacterDocument as query } from '@/graphql/types';

const SingleCharacterPage = async ({ params }: { params: { id: string } }) => {
  const { data, loading } = await getClient().query({
    query,
    variables: { id: `${params.id}` },
  });

  if (loading) return <Loader />;
  if (!data || !data.character) {
    return <p>No characters found.</p>;
  }
  return (
    <div className="max-w-6xl my-0 mx-auto">
      <div className="flex gap-6 justify-center items-center pt-8">
        <CharacterCard
          image={data.character.image}
          name={data.character.name}
          type={data.character.type}
          gender={data.character.gender}
          status={data.character.status}
          location={data.character.location}
          single={true}
        />
        <div className="flex-col gap-4  shadow-lg rounded">
          <InfoTable episode={data.character.episode} />
          <Stats
            gender={data.character.gender}
            status={data.character.status}
            species={data.character.species}
            origin={data.character.origin}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCharacterPage;
