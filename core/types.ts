import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** Episodes in which this character appeared. */
  episode?: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']['output']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']['output']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']['output']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']['output']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']['output']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']['output']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']['output']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been seen in the episode. */
  characters?: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']['output']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']['output']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']['output']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']['output']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']['output']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']['output']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been last seen in the location. */
  residents?: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']['output']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type GetCharactersQueryVariables = Exact<{
  filter?: InputMaybe<FilterCharacter>;
  page: Scalars['Int']['input'];
}>;


export type GetCharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', image?: string | null, name?: string | null, type?: string | null, status?: string | null, id?: string | null } | null> | null, info?: { __typename?: 'Info', next?: number | null, pages?: number | null, prev?: number | null, count?: number | null } | null } | null };

export type GetEpisodeQueryVariables = Exact<{
  episodeId: Scalars['ID']['input'];
}>;


export type GetEpisodeQuery = { __typename?: 'Query', episode?: { __typename?: 'Episode', episode?: string | null, name?: string | null, air_date?: string | null, characters: Array<{ __typename?: 'Character', image?: string | null, name?: string | null, type?: string | null, status?: string | null, id?: string | null } | null> } | null };

export type GetLocationQueryVariables = Exact<{
  locationId: Scalars['ID']['input'];
}>;


export type GetLocationQuery = { __typename?: 'Query', location?: { __typename?: 'Location', name?: string | null, residents: Array<{ __typename?: 'Character', image?: string | null, name?: string | null, type?: string | null, status?: string | null, id?: string | null } | null> } | null };

export type GetSingleCharacterQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetSingleCharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', gender?: string | null, image?: string | null, name?: string | null, type?: string | null, status?: string | null, species?: string | null, episode: Array<{ __typename?: 'Episode', episode?: string | null, name?: string | null, air_date?: string | null } | null>, location?: { __typename?: 'Location', dimension?: string | null, name?: string | null } | null } | null };


export const GetCharactersDocument = gql`
    query GetCharacters($filter: FilterCharacter, $page: Int!) {
  characters(filter: $filter, page: $page) {
    results {
      image
      name
      type
      status
      id
    }
    info {
      next
      pages
      prev
      count
    }
  }
}
    `;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetEpisodeDocument = gql`
    query GetEpisode($episodeId: ID!) {
  episode(id: $episodeId) {
    characters {
      image
      name
      type
      status
      id
    }
    episode
    name
    air_date
  }
}
    `;

/**
 * __useGetEpisodeQuery__
 *
 * To run a query within a React component, call `useGetEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodeQuery({
 *   variables: {
 *      episodeId: // value for 'episodeId'
 *   },
 * });
 */
export function useGetEpisodeQuery(baseOptions: Apollo.QueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, options);
      }
export function useGetEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodeQuery, GetEpisodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(GetEpisodeDocument, options);
        }
export type GetEpisodeQueryHookResult = ReturnType<typeof useGetEpisodeQuery>;
export type GetEpisodeLazyQueryHookResult = ReturnType<typeof useGetEpisodeLazyQuery>;
export type GetEpisodeQueryResult = Apollo.QueryResult<GetEpisodeQuery, GetEpisodeQueryVariables>;
export const GetLocationDocument = gql`
    query GetLocation($locationId: ID!) {
  location(id: $locationId) {
    residents {
      image
      name
      type
      status
      id
    }
    name
  }
}
    `;

/**
 * __useGetLocationQuery__
 *
 * To run a query within a React component, call `useGetLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationQuery({
 *   variables: {
 *      locationId: // value for 'locationId'
 *   },
 * });
 */
export function useGetLocationQuery(baseOptions: Apollo.QueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, options);
      }
export function useGetLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationQuery, GetLocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(GetLocationDocument, options);
        }
export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;
export type GetLocationLazyQueryHookResult = ReturnType<typeof useGetLocationLazyQuery>;
export type GetLocationQueryResult = Apollo.QueryResult<GetLocationQuery, GetLocationQueryVariables>;
export const GetSingleCharacterDocument = gql`
    query GetSingleCharacter($id: ID!) {
  character(id: $id) {
    gender
    image
    name
    type
    status
    species
    episode {
      episode
      name
      air_date
    }
    location {
      dimension
      name
    }
  }
}
    `;

/**
 * __useGetSingleCharacterQuery__
 *
 * To run a query within a React component, call `useGetSingleCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSingleCharacterQuery(baseOptions: Apollo.QueryHookOptions<GetSingleCharacterQuery, GetSingleCharacterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleCharacterQuery, GetSingleCharacterQueryVariables>(GetSingleCharacterDocument, options);
      }
export function useGetSingleCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleCharacterQuery, GetSingleCharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleCharacterQuery, GetSingleCharacterQueryVariables>(GetSingleCharacterDocument, options);
        }
export type GetSingleCharacterQueryHookResult = ReturnType<typeof useGetSingleCharacterQuery>;
export type GetSingleCharacterLazyQueryHookResult = ReturnType<typeof useGetSingleCharacterLazyQuery>;
export type GetSingleCharacterQueryResult = Apollo.QueryResult<GetSingleCharacterQuery, GetSingleCharacterQueryVariables>;