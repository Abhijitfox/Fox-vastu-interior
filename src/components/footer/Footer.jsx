import React from "react";

const Footer = () => {
    return (
        <div
            className="relative w-full bg-cover bg-center bg-no-repeat text-white py-16 px-6 md:px-12"
            style={{
                backgroundImage: `url("/assets/images/footerimg.jpeg")`, // Replace with your uploaded image path
            }}
        >
            {/* Overlay for blur effect */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* New York */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                        New York Office
                    </h3>
                    <p className="text-sm opacity-90">555-1234</p>
                    <p className="text-sm opacity-90">info@renovatio.com</p>
                    <p className="text-sm mt-2 opacity-90">
                        123 Main Street, Suite 200<br />
                        Anytown State: StateName
                    </p>
                </div>

                {/* Paris */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                        Paris Office
                    </h3>
                    <p className="text-sm opacity-90">+33 1 23 45 67 89</p>
                    <p className="text-sm opacity-90">info@renovatioparis.com</p>
                    <p className="text-sm mt-2 opacity-90">
                        123 Rue de la Paix, 75002<br />
                        Paris, France
                    </p>
                </div>

                {/* Berlin */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                        Berlin Office
                    </h3>
                    <p className="text-sm opacity-90">+49 30 12345678</p>
                    <p className="text-sm opacity-90">info@renovatioberlin.com</p>
                    <p className="text-sm mt-2 opacity-90">
                        Mauerstrasse 45, 10117<br />
                        Berlin, Germany
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
