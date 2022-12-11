import Link from 'next/link';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <div>
    <header className='flex justify-center py-3 border-b-2 mb-4'>
      <Link href='/' className='font-bold'>
        LASTFM
      </Link>
    </header>
    <section className='max-w-3xl m-auto px-2'>{children}</section>
  </div>
);

export default Layout;
