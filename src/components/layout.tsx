import * as React from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div className="container m-auto min-h-screen px-16 max-w-5xl">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )

};

export default Layout;
