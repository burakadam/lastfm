import Image from 'next/image';
import Link from 'next/link';

import LASTFM_LOGO from '@/public/assets/images/lastfm_logo.png';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <div>
    <header className='flex justify-center py-3 border-b-2 mb-4 bg-black'>
      <Link href='/' className='font-bold'>
        <Image src={LASTFM_LOGO} alt='Last FM' width={45} />
      </Link>
    </header>
    <section className='max-w-3xl m-auto px-2'>{children}</section>
  </div>
);

export default Layout;
