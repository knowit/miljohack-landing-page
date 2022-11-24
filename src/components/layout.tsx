import * as React from 'react';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div className="min-h-screen bg-dark">
      <main className='container'>
        {children}
      </main>
    </div>
  )

};

export default Layout;
