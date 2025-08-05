import {
    FaTree, FaWater, FaBolt, FaTools, FaLandmark, FaRoad, FaLightbulb,
    FaBuilding, FaHome, FaBasketballBall, FaChartLine, FaChild
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import images from "../../assets/images/images"; // Replace with your actual image import

const RoyalCasaProjectShowcase = () => {
    return (
        <div className="bg-white text-black py-14 px-6 sm:px-10 rounded-2xl shadow-inner">

            {/* Top Hero Section */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-4xl font-extrabold leading-snug text-yellow-400 mb-4">
                        Discover Serene Living<br />at Royal Casa, Yavat–Malshiras
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        A Collector-sanctioned <strong className="text-black">Residential N.A. Plot</strong> project near <strong className="text-black">Pune–Solapur Highway</strong>, designed for peaceful yet modern living.
                    </p>
                    <p className="mt-6 flex items-center gap-3 text-yellow-500 font-semibold text-lg">
                        <HiLocationMarker size={22} />
                        Prime Gated Community near Pune–Solapur Highway
                    </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <img src={images.RoyalCasa1} alt="Royal Casa Layout" className="object-cover w-full h-full" />
                </div>
            </div>

            <div className="my-12" />

            {/* Infrastructure Section */}
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <img src={images.RoyalCasa4} alt="Infrastructure" className="rounded-lg shadow-md hover:shadow-yellow-300 transition-shadow duration-300" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Solid Infrastructure</h3>
                    <ul className="space-y-3 text-lg text-gray-800">
                        {[
                            ["Lush plantations", <FaTree className="text-green-600" />],
                            ["Water connection to every plot", <FaWater className="text-blue-500" />],
                            ["Electricity ready plots", <FaBolt className="text-yellow-500" />],
                            ["Modern drainage facilities", <FaTools className="text-orange-600" />],
                            ["Individual name plates", <FaLandmark className="text-purple-600" />],
                            ["Well-laid internal roads", <FaRoad className="text-gray-600" />],
                            ["Street lighting across layout", <FaLightbulb className="text-yellow-600" />],
                            ["Boundary wall option", <FaBuilding className="text-gray-700" />],
                        ].map(([text, icon], idx) => (
                            <li key={idx} className="flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300">
                                <span className="text-xl">{icon}</span>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Project Features */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Highlights</h3>
                <div className="grid md:grid-cols-2 gap-10">
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300">
                            <FaHome className="text-green-700" /> Clear plot demarcations
                        </li>
                        <li className="flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300">
                            <FaLandmark className="text-purple-600" /> Individual 7/12 extract per plot
                        </li>
                        <li className="flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300">
                            <HiLocationMarker className="text-red-500" /> Near Pune–Solapur Highway
                        </li>
                        <li className="flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300">
                            <FaTree className="text-green-500" /> Pollution-free, natural surroundings
                        </li>
                    </ul>
                    <img src={images.RoyalCasa2} alt="Features" className="rounded-lg shadow-md hover:shadow-yellow-400 transition-shadow duration-300" />
                </div>
            </div>

            {/* Amenities Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Exclusive Amenities</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        ["Club House", <FaHome className="text-green-600" />],
                        ["Party Lawn", <FaChartLine className="text-pink-600" />],
                        ["Children’s Play Area", <FaChild className="text-blue-600" />],
                        ["Basketball Court", <FaBasketballBall className="text-orange-500" />],
                        ["Secure Gated Layout", <FaBuilding className="text-gray-800" />],
                    ].map(([text, icon], idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 bg-white border border-gray-100 hover:border-yellow-400 shadow-sm p-4 rounded-lg hover:scale-105 transition-all duration-300"
                        >
                            <span className="text-2xl">{icon}</span>
                            <span className="text-lg">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lifestyle Message */}
            <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <img src={images.RoyalCasa3} alt="Highlight" className="rounded-lg shadow-md hover:shadow-yellow-300 transition-shadow duration-300" />
                </div>
                <div>
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-800 space-y-4">
                        <strong className="text-black">Peaceful Yet Connected:</strong> A perfect mix of nature and accessibility<br />
                        <strong className="text-black">Facilities Nearby:</strong> Schools, hospitals, markets, and resorts<br />
                        <strong className="text-black">Ideal For:</strong> Your forever home or a relaxing weekend getaway <br />
                        <strong className="text-black">Loan Facility:</strong> Approved by all major banks

                    </p>
                    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm hover:bg-yellow-100 transition-colors duration-300">
                        <p className="text-yellow-800 font-semibold">
                            🌿 Royal Casa: Where tranquility meets modern living.<br />
                            <span className="text-red-600 font-bold">Don’t miss your chance to own this lifestyle!</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RoyalCasaProjectShowcase;
