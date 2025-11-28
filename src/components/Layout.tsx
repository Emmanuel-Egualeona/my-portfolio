import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-swiss-white text-swiss-black font-sans selection:bg-swiss-red selection:text-white">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {children}
            </main>
        </div>
    );
};

export default Layout;
