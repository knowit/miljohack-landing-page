import * as React from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div className="container flex flex-col h-full m-auto px-8 md:px-16 max-w-5xl">
      <Header />
      <main className='grow'>
        {children}
      </main>
      <Footer />
    </div>
  )

};

export default Layout;
