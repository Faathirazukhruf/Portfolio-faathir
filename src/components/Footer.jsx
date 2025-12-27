import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background py-8 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500">
                    &copy; {new Date().getFullYear()} <span className="text-white font-medium">Faathir Azukhruf</span>. All rights reserved.
                </p>
                <p className="text-xs text-gray-600 mt-2">
                    Engineered for performance. Powered by automation.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
