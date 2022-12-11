import Image from 'next/image';
import { listeners } from 'process';

interface IListCardProps {
  name: string;
  title: string;
  image: string;
  playcount: string;
  listeners?: string;
}

const ListCard = ({
  name,
  title,
  image,
  playcount,
  listeners,
}: IListCardProps) => (
  <div className='border p-2 flex mb-2'>
    <div className='mr-2'>
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className='w-12 h-12'
      />
    </div>
    <div className='flex justify-between text-sm flex-1'>
      <div className='mr-2'>
        <h3>{name}</h3>
        <h4 className='font-bold'>{title}</h4>
      </div>
      <div className='flex flex-col justify-center text-xs'>
        {listeners && <p>{listeners} listeners</p>}
        <p>{playcount} play</p>
      </div>
    </div>
  </div>
);

export default ListCard;
