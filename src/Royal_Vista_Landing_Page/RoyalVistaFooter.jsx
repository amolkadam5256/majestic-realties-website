import React from 'react';
const RoyalVistaFooter = () => {
    return (
        <footer className="bg-gray-900 text-white pt-1 pb-8 px-4">

            {/* Website Link Section */}
            <div className="text-center py-6 border-t border-gray-800 mt-8">
                <p className="text-gray-400 mb-2">Visit our website for more information</p>
                <a
                    href="https://majesticrealties.com/"
                    className="inline-block text-yellow-400 font-semibold text-lg hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >www.majesticrealties.com</a>
            </div>

            {/* Copyright */}
            <div className="text-center pt-6">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()}  Majestic Estates. All rights reserved.


                </p>
            </div>
        </footer>
    );
};

export default RoyalVistaFooter;