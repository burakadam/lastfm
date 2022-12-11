import { useState } from 'react';
import { useInView } from 'react-cool-inview';

import ArtistCard from '@/components/ArtistCard';
import Layout from '@/components/Layout';

import { ITopActor } from '@/model/topArtist';
import { fetchTopArtist } from '@/services/Artists/api';
import { findImageBySize } from '@/utils/imageFinder';
import Head from 'next/head';

// NOTE: There are too much pages, i think pagiton would be a better option

export async function getServerSideProps() {
  const response = await fetchTopArtist();

  return {
    props: response,
  };
}

interface HomeProps {
  error: string | null;
  artists: ITopActor[];
  totalPages: string | null;
}

export default function Home(props: HomeProps) {
  const [artists, setArtist] = useState(props.artists);
  const [page, setPage] = useState(2);

  const callArtistList = async () => {
    const response = await fetchTopArtist(page);

    setPage((prev) => prev + 1);
    setArtist((prev): ITopActor[] => {
      const data = response.artists as ITopActor[];
      return [...prev, ...data];
    });
  };

  const { observe } = useInView({
    rootMargin: '150px 0px',
    onEnter: ({ unobserve }) => {
      unobserve();
      callArtistList();
    },
  });

  if (props.error)
    return (
      <Layout>
        <p className='text-center my-4 text-red-500'>ERROR : {props.error}</p>
      </Layout>
    );

  return (
    <Layout>
      <Head>
        <title>LastFm Top Artists</title>
      </Head>
      {props.totalPages && (
        <p className='text-right text-sm text-gray-500 mb-4'>
          Total Pages: {props.totalPages}
        </p>
      )}
      {artists.map(({ name, playcount, listeners, image }, index) => (
        <div
          ref={index === artists.length - 1 ? observe : null}
          // NOTE: mbid could be empty thats why i prefer to use index
          key={index}
        >
          <ArtistCard
            name={name}
            playcount={playcount}
            listeners={listeners}
            image={findImageBySize(image, 'medium')}
          />
        </div>
      ))}
      {props.totalPages !== page.toString() && (
        <p className='text-lg text-center mb-8'>....loading</p>
      )}
    </Layout>
  );
}
