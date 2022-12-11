import ArtistCard from '@/components/ArtistCard';
import Layout from '@/components/Layout';
import { fetchArtistInfo } from '@/services/Artists/api';
import { findImageBySize } from '@/utils/imageFinder';
import Head from 'next/head';
import ArtistTopItems from './sections/ArtistTopItems';

interface IContext {
  name: string;
}

export async function getServerSideProps({ params }: { params: IContext }) {
  const response = await fetchArtistInfo(params.name);
  return {
    props: response,
  };
}

const Detail = (props: any) => {
  if (props.error)
    return (
      <Layout>
        <p className='text-center my-4 text-red-500'>ERROR : {props.error}</p>
      </Layout>
    );

  const {
    info: {
      name,
      image,
      stats: { listeners, playcount },
    },
  } = props;

  return (
    <Layout>
      <Head>
        <title>{props.name} Info Page</title>
      </Head>
      <ArtistCard
        name={name}
        playcount={playcount}
        listeners={listeners}
        image={findImageBySize(image, 'medium')}
      />
      <div className='flex justify-between my-4 max-sm:flex-col'>
        <ArtistTopItems type='topalbums' name={name} />
        <ArtistTopItems type='toptracks' name={name} />
      </div>
    </Layout>
  );
};

export default Detail;
