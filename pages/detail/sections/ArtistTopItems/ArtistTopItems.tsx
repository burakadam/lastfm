import ListCard from '@/components/ListCard';
import {
  IArtistList,
  TArtistListType,
  TArtistObjectType,
} from '@/model/artistList';
import { fetchArtistDetailList } from '@/services/Artists/api';
import API_ROUTES from '@/services/Artists/apiRoutes';
import { findImageBySize } from '@/utils/imageFinder';
import { useEffect, useState } from 'react';

interface IArtistTopItemsProps {
  type: TArtistListType;
  name: string;
}

const SERVICE: Record<
  TArtistListType,
  { service: keyof typeof API_ROUTES; object: TArtistObjectType }
> = {
  topalbums: {
    service: 'gettopalbums',
    object: 'album',
  },
  toptracks: {
    service: 'gettoptracks',
    object: 'track',
  },
};

const ArtistTopItems = (props: IArtistTopItemsProps) => {
  const [list, setList] = useState<IArtistList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getList = async () => {
      const response = await fetchArtistDetailList(
        SERVICE[props.type].service,
        props.name,
        props.type,
        SERVICE[props.type].object
      );

      setLoading(false);

      if (response.error) setError(response.error);
      else setList(response.data);
    };

    getList();
  }, [props.name, props.type]);

  if (error)
    return <p className='text-center my-4 text-red-500 text-xs'>{error}</p>;
  if (loading) return <p>...loading</p>;

  return (
    <div className='sm:w-[49%]'>
      <div className='mb-2'>
        <h4>
          {props.type === 'topalbums' ? 'Top 10 Albums' : 'Top 10 Tracks'}
        </h4>
      </div>
      <div>
        {list.map(({ name, playcount, image, listeners }, index) => (
          <ListCard
            key={index}
            name={props.name}
            title={name}
            playcount={playcount}
            image={findImageBySize(image, 'medium')}
            {...(listeners && { listeners })}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistTopItems;
