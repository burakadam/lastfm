import Image from 'next/image';
import Link from 'next/link';

export interface IArtistCardProps {
  name: string;
  image: string;
  playcount: string;
  listeners: string;
}

const ArtistCard = ({
  name,
  image,
  playcount,
  listeners,
}: IArtistCardProps) => (
  <Link
    href={`/detail/${name.split(' ').join('').toLowerCase()}`}
    className='border p-2 flex mb-2'
  >
    <div className='mr-2'>
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className='w-28 h-28'
      />
    </div>
    <div className='flex-col flex justify-between'>
      <h3 className='font-bold'>
        Artist : <span className='italic'>{name}</span>
      </h3>
      <div className='text-sm text-gray-500'>
        <p>Listeners : {listeners}</p>
        <p>Play Count : {playcount}</p>
      </div>
    </div>
  </Link>
);

export default ArtistCard;
