import { IImage } from './info';

export type TArtistListType = 'topalbums' | 'toptracks';
export type TArtistObjectType = 'track' | 'album';

export interface IArtistList {
  name: string;
  playcount: string;
  listeners: string;
  mbid?: string;
  url: string;
  streamable: string;
  artist: IArtist;
  image: IImage[];
  '@attr': Attr;
}

export interface IAttr {
  rank: string;
}

export interface IArtist {
  name: string;
  mbid: string;
  url: string;
}

export enum ISize {
  Extralarge = 'extralarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}
