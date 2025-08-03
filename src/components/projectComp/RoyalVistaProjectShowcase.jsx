import {
    FaPlaneDeparture, FaTree, FaWater, FaBolt, FaTools, FaLandmark, FaRoad,
    FaLightbulb, FaBuilding, FaHome, FaBasketballBall, FaChartLine, FaChild
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import images from "../../assets/images/images";

const ProjectShowcase = () => {
    return (
        <div className="bg-white text-black py-14 px-6 sm:px-10 rounded-2xl shadow-inner">
            {/* Top Hero Section */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-4xl font-extrabold leading-snug text-yellow-400 mb-4">
                        Build Your Tomorrow<br />with a Sound Investment Today!
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        This pivotal decision should be made wisely to secure your future with <strong className="text-black">Royal Vista</strong>. Make the right investment choice and embark on a path to success.
                    </p>
                    <p className="mt-6 flex items-center gap-3 text-yellow-500 font-semibold text-lg">
                        <FaPlaneDeparture size={22} />
                        NA Sanctioned Residential Plots near Pune Airport
                    </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                    <img src={images.RoyalVistaLayout_Phase_1} alt="Investment" className="object-cover w-full h-full" />
                </div>
            </div>

            <div className="my-12" />

            {/* Infrastructure Section */}
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <img src={images.RoyalVistaframe} alt="Infrastructure" className="rounded-lg shadow-md hover:shadow-yellow-300 transition-shadow duration-300" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Robust Infrastructure</h3>
                    <ul className="space-y-3 text-lg text-gray-800">
                        {[
                            ["Tree plantation", <FaTree className="text-green-600" />],
                            ["Water connection", <FaWater className="text-blue-500" />],
                            ["Electricity supply", <FaBolt className="text-yellow-500" />],
                            ["Drainage system", <FaTools className="text-orange-600" />],
                            ["Name plate for each plot", <FaLandmark className="text-purple-600" />],
                            ["Internal cement roads", <FaRoad className="text-gray-600" />],
                            ["Drip irrigation system", <FaWater className="text-cyan-600" />],
                            ["Street lights", <FaLightbulb className="text-yellow-600" />],
                            ["Compound wall fencing", <FaBuilding className="text-gray-700" />],
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
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Features</h3>
                <div className="grid md:grid-cols-2 gap-10">
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300">
                            <FaHome className="text-green-700" /> Fully developed bungalow plots starting from 1100 sq.ft
                        </li>
                        <li className="flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300">
                            <FaTree className="text-green-500" /> Pollution-free picturesque surroundings
                        </li>
                        <li className="flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300">
                            <FaLandmark className="text-purple-600" /> Individual 7/12 extract for every plot
                        </li>
                        <li className="flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300">
                            <HiLocationMarker className="text-red-500" /> Near Pune–Solapur–Hyderabad Highway
                        </li>
                    </ul>
                    <img src={images.RoyalVistaLayout} alt="Features" className="rounded-lg shadow-md hover:shadow-yellow-400 transition-shadow duration-300" />
                </div>
            </div>

            {/* Amenities Section */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Premium Amenities</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        ["Grand Entrance Gate", <FaLandmark className="text-yellow-700" />],
                        ["Basketball Court", <FaBasketballBall className="text-orange-500" />],
                        ["Club House", <FaHome className="text-green-600" />],
                        ["Exclusive Party Lawn", <FaChartLine className="text-pink-600" />],
                        ["Children’s Play Area", <FaChild className="text-blue-600" />],
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

            {/* Highlights Section */}
            <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <img src={images.view2} alt="Highlight" className="rounded-lg shadow-md hover:shadow-yellow-300 transition-shadow duration-300" />
                </div>
                <div>
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-800 space-y-4">
                        <strong className="text-black">Bungalow Plots:</strong> Starting from 1100 sq.ft<br />
                        <strong className="text-black">Location:</strong> Just 8 km from the Upcoming Sambhajiraje International Airport<br />
                        <strong className="text-black">Loan Facility:</strong> Approved by all major banks
                    </p>
                    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm hover:bg-yellow-100 transition-colors duration-300">
                        <p className="text-yellow-800 font-semibold">
                            💥 Lowest price ever launched in the market!<br />
                            This is your <span className="text-red-600 font-bold">Now-or-Never</span> opportunity — make the smart move!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;