import { BASE_URL } from '@/constants/baseUrl';
import { API_KEY } from '@/constants/key';

import { ITopActor } from '@/model/topArtist';
import { IInfo } from '@/model/info';

import API_ROUTES from './apiRoutes';
import {
  IArtistList,
  TArtistListType,
  TArtistObjectType,
} from '@/model/artistList';

const SOMETHING_WENT_WRONG = 'Something went wrong';

interface IFetchTopArtist {
  error: string | null;
  artists: ITopActor | [];
  totalPages: string | null;
}

async function fetchTopArtist(
  page: number = 1,
  limit: number = 10
): Promise<IFetchTopArtist> {
  try {
    const topArtistResponse = await fetch(
      `${BASE_URL}${API_ROUTES.topArtists}&api_key=${API_KEY}&format=json&limit=${limit}&page=${page}`
    );

    if (topArtistResponse.ok) {
      const { artists } = await topArtistResponse.json();

      return {
        error: null,
        artists: artists.artist,
        totalPages: artists['@attr'].totalPages,
      };
    } else {
      const { message } = await topArtistResponse.json();

      return {
        error: message ?? SOMETHING_WENT_WRONG,
        artists: [],
        totalPages: null,
      };
    }
  } catch (error) {
    return { error: SOMETHING_WENT_WRONG, artists: [], totalPages: null };
  }
}

interface IFetchArtistInfo {
  error: string | null;
  info: IInfo | null;
}

async function fetchArtistInfo(name: string): Promise<IFetchArtistInfo> {
  const ERROR_RESPONSE = { error: SOMETHING_WENT_WRONG, info: null };
  try {
    const artistResponse = await fetch(
      `${BASE_URL}${API_ROUTES.getInfo}&artist=${name}&api_key=${API_KEY}&format=json&autocorrect=1`
    );

    if (artistResponse.ok) {
      const data = await artistResponse.json();

      /*NOTE: if name was not found response still returns ok*/
      return data.error ? ERROR_RESPONSE : { error: null, info: data.artist };
    } else {
      const { message } = await artistResponse.json();

      return { error: message ?? SOMETHING_WENT_WRONG, info: null };
    }
  } catch (error) {
    return ERROR_RESPONSE;
  }
}

interface IFetchArtistDetailList {
  error: string | null;
  data: IArtistList[];
}

async function fetchArtistDetailList(
  service: keyof typeof API_ROUTES,
  name: string,
  type: TArtistListType,
  object: TArtistObjectType
): Promise<IFetchArtistDetailList> {
  try {
    const artistResponse = await fetch(
      `${BASE_URL}${API_ROUTES[service]}&artist=${name}&api_key=${API_KEY}&format=json&autocorrect=1&limit=10`
    );

    if (artistResponse.ok) {
      const data = await artistResponse.json();

      return { error: null, data: data[type][object] };
    } else {
      const { message } = await artistResponse.json();

      return { error: message ?? SOMETHING_WENT_WRONG, data: [] };
    }
  } catch (error) {
    return { error: SOMETHING_WENT_WRONG, data: [] };
  }
}

export { fetchTopArtist, fetchArtistInfo, fetchArtistDetailList };
