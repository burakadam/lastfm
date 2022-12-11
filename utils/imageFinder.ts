import { ITopActorImage } from '@/model/topArtist';

export const findImageBySize = (
  list: ITopActorImage[],
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega'
): string => {
  const img = list.find((item) => item.size === size);

  return (
    img?.['#text'] ??
    'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png'
  );
};
