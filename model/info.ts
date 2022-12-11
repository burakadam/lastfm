export interface IInfo {
  name: string;
  mbid: string;
  url: string;
  image: IImage[];
  streamable: string;
  ontour: string;
  stats: IStats;
  similar: ISimilar;
  tags: ITags;
  bio: IBio;
}

export interface IBio {
  links: ILinks;
  published: string;
  summary: string;
  content: string;
}

export interface ILinks {
  link: ILink;
}

export interface ILink {
  '#text': string;
  rel: string;
  href: string;
}

export interface IImage {
  '#text': string;
  size: string;
}

export interface ISimilar {
  artist: IArtist[];
}

export interface IArtist {
  name: string;
  url: string;
  image: IImage[];
}

export interface IStats {
  listeners: string;
  playcount: string;
}

export interface ITags {
  tag: ITag[];
}

export interface ITag {
  name: string;
  url: string;
}
