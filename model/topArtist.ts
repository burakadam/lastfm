export interface ITopActor {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: ITopActorImage[];
}

export interface ITopActorImage {
  '#text': string;
  size: string;
}
